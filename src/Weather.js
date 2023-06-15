import React, { useState, useRef } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
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

  function handleSubmit(event) {
    event.preventDefault();
    ref.current.value = "";
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentLocationData(position) {
    const apiKey = "4e350df61at74oee42abc35600fd88fb";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocationData);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body shadow">
            <form className="search-area" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-1">
                  <i
                    className="fa-regular fa-compass compass"
                    onClick={getCurrentLocation}
                  ></i>
                </div>
                <div className="col-7 col-sm-8">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for a city"
                      autoFocus="on"
                      autoComplete="off"
                      onChange={handleCityChange}
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
        <footer>
          <a
            href="https://github.com/nadegerodier/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://incomparable-starburst-3e5eae.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nadege Rodier
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
