import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
  
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search(){
     //const apiKey = "98ebc9d71dbb712bf026f47391b0b077";
     const apiKey = "017d56650cd168d68067850318775d43";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function changeCity(event){
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-5">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Type a city"
                    className="form-control"
                    onChange={changeCity}
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
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates = {weatherData.coordinates}/>
      </div>
    );
  } else {
   search();
    return "Loading...";
  }
}
