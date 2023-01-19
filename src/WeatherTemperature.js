import React, {useState} from "react";

export default function WeatherTemperature (props){
    const[unit, setUnit] = useState ("celsius");
function showFahrenheit (event) {
    event.preventDefault();
    setUnit("fahrenheit");
}
function showCelsius (event){
    event.preventDefault();
    setUnit("celsius");
}
function fahrenheit(){
return Math.round(props.celsius * 1.8 + 32);
}

    if (unit==="celsius"){
      return (
        <div className="WeatherTemperature d-flex">
          <span className="temperature">{props.celsius}</span>
          <span className="units">
            ℃ |{" "}
            <a href="/" onClick={showFahrenheit}>
              ℉
            </a>
          </span>
        </div>
      );
    }
    else{
        return (
          <div className="WeatherTemperature d-flex">
            <span className="temperature">
              {fahrenheit()}
            </span>
            <span className="units">
              <a href="/" onClick={showCelsius}>
                {" "}
                ℃
              </a>{" "}
              | ℉
            </span>
          </div>
        );
    }
}