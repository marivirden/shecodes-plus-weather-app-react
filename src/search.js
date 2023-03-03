import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    getCityWeather();
  }

  function handleWeatherData(response) {
    console.log(response.data);
    setIsSubmitted(true);
    setWeatherData(response.data);
  }

  function getCityWeather() {
    const apiKey = "0c5cd3271ca5da27f88448575bac1056";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleWeatherData);
  }

  function formattedDate(props) {
    return "Wednesday 7:00";
    // console.log(props.date);
  }

  function updateCity(event) {
    setCity(event.target.value);

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      {isSubmitted ? (
        <>
          <h1>{city}</h1>
          <ul>
            <li> {formattedDate()} </li>
          </ul>
        </>
      ) : null}
      <div className="row">
        <div className="col-6">
          <>
            <img
              src={
                isSubmitted
                  ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                  : ""
              }
            />
            <span className="temperature font-weight-bold">
              {isSubmitted ? `${Math.round(weatherData.main.temp)}°F | °C` : ""}
            </span>
          </>
        </div>
        <div className="col-6">
          {isSubmitted ? (
            <div>
              <ul>
                <li>Description: {weatherData.weather[0].description}</li>
                <li>Humidity: {Math.round(weatherData.main.humidity)}%</li>
                <li>Wind: {Math.round(weatherData.wind.speed)} m/hr </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
