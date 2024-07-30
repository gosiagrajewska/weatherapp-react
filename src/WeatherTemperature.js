import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temperature">
        <div>{Math.round(props.celsius)}</div>
        <div className="unitCelcius">
          <strong>°C</strong>
        </div>
        <div className="unitFeature">|</div>
        <div className="unitFahrenheit">
          {" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="temperature">
        <div>{Math.round(fahrenheit)}</div>
        <div className="unitCelcius">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </div>
        <div className="unitFeature">|</div>
        <div className="unitFahrenheit">
          {" "}
          <strong>°F</strong>
        </div>
      </div>
    );
  }
}
