import React, { useState } from "react";
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

  function updateCity(event) {
    setCity(event.target.value);

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="search" />
        </form>
      </div>
      {isSubmitted ? (
        <div>
          <ul>
            <li>Temperature: {Math.round(weatherData.main.temp)}°F </li>
            <li>Description: {weatherData.weather[0].description}</li>
            <li>Humidity: {Math.round(weatherData.main.humidity)}%</li>
            <li>Wind: {Math.round(weatherData.wind.speed)} m/hr </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
