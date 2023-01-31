import React from "react";

export default function WeatherTemperature (props){
 
      return (
        <div className="WeatherTemperature d-flex">
          <span className="temperature">{props.celsius}</span>
          <span className="units">
            ℃ 

          </span>
        </div>
      );
    }
  
