import React, { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const ref = useRef(null);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "4e350df61at74oee42abc35600fd88fb";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function findCityData(event) {
    event.preventDefault();
    ref.current.value = "";
    search();
  }

  function findCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body shadow">
            <form className="search-area" onSubmit={findCityData}>
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
                      onChange={findCity}
                      ref={ref}
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
            <WeatherInfo data={weatherData} />
            <hr />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
