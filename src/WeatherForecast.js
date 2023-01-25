import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);
}
 const apiKey = "017d56650cd168d68067850318775d43";


   
    let latitute = props.coordinates.lat;
    let longitute = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitute}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size="32"/>
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}