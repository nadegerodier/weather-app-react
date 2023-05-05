import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body shadow">
          <form className="search-box">
            <div className="row">
              <div className="col-1">
                <i class="fa-regular fa-compass"></i>
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
              <h1>Austin</h1>
              <h2>Friday 10:00 AM</h2>
              <h3>Broken clouds</h3>
            </div>
            <div className="temp-data">
              <i class="fa-regular fa-cloud"></i>
              <span>75°F</span>
            </div>
            <div className="weather-conditions">
              Humidity: 50% <br />
              Wind: 6mph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
