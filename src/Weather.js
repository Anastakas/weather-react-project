import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <h1>Kyiv</h1>
        </div>
        <div className="col-7">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Type a city"
                  className="form-control"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ul className="date">
        <li>Monday</li>
        <li>12:05</li>
      </ul>
      <div className="row">
        <div className="col-8">
          <div className="d-flex">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="Overcast clouds"
            />

            <span className="temperature">-3</span>
            <span className="units">℃</span>

            <span className="description">Overcast clouds</span>
          </div>
        </div>

        <div className="col-4">
          <ul className="options">
            <li>Humidity: 92 %</li>
            <li>Pressure: 1022 mb</li>
            <li>Wind: 1 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
