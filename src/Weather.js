import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function updateLocationData(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body shadow">
            <form className="search-box">
              <div className="row">
                <div className="col-1">
                  <i className="fa-regular fa-compass compass"></i>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for a city"
                      autoFocus="on"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-light search-button shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="current-weather">
              <div className="location-data">
                <h1>{weatherData.city}</h1>
                <h2>Friday 10:00 AM</h2>
                <h3>{weatherData.description}</h3>
              </div>
              <div className="temp-data">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="current-weather-icon"
                />
                <span>
                  {weatherData.temperature}
                  <span className="temp-scale-selector">°F | C</span>
                </span>
              </div>
              <div className="weather-conditions">
                Humidity: {weatherData.humidity}% <br />
                Wind: {weatherData.wind}mph
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4e350df61at74oee42abc35600fd88fb";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(`${apiUrl}`).then(updateLocationData);

    return "Loading...";
  }
}
