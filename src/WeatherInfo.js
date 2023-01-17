import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <FormattedDate date={props.data.date} />

        <div className="row">
          <div className="col-8">
            <div className="d-flex">
              <img src={props.data.iconUrl} alt={props.data.description} />

              <span className="temperature">{props.data.temperature}</span>
              <span className="units">℃</span>

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