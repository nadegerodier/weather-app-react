import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current-weather">
        <div className="location-data">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
          <h3>{props.data.description}</h3>
        </div>
        <div className="temp-data">
          <div className="current-weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <span>
            {props.data.temperature}
            <span className="temp-scale-selector">°F | C</span>
          </span>
        </div>
        <div className="weather-conditions">
          Humidity: {props.data.humidity}% <br />
          Wind: {props.data.wind} mph
        </div>
      </div>
    </div>
  );
}
