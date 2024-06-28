import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>

        <div className="row mt-3">
          <div className="col-6 currentWeather">
            <img
              src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt={props.data.description}
            ></img>

            <div className="temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className="unitCelcius">°C</div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
