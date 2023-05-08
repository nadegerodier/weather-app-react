import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.fahrenheit)}
        <span className="temp-scale-selector">
          °F |{" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        {Math.round(celsius)}
        <span className="temp-scale-selector">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
