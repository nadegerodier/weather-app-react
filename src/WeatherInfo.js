import React from "react";
import FormattedDate from "./FormattedDate";
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
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="current-weather-icon"
          />
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
