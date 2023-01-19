import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <FormattedDate date={props.data.date} />

        <div className="row">
          <div className="col-8">
            <div className="d-flex">
              <WeatherIcon code={props.data.icon} />

            <WeatherTemperature celsius={props.data.temperature}/>

              <span className="description text-capitalize">
                {props.data.description}
              </span>
            </div>
          </div>

          <div className="col-4">
            <ul className="options">
              <li>Humidity: {props.data.humidity} %</li>
              <li>Pressure: {props.data.pressure} mb</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}