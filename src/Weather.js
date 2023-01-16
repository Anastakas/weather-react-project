import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      day: "Monday",
      time: "11:17",
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1>{weatherData.city}</h1>
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
          <li className="day">{weatherData.day}</li>
          <li className="time">{weatherData.time}</li>
        </ul>
        <div className="row">
          <div className="col-8">
            <div className="d-flex">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="temperature">{weatherData.temperature}</span>
              <span className="units">℃</span>

              <span className="description text-capitalize">
                {weatherData.description}
              </span>
            </div>
          </div>

          <div className="col-4">
            <ul className="options">
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Pressure: {weatherData.pressure} mb</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "98ebc9d71dbb712bf026f47391b0b077";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
