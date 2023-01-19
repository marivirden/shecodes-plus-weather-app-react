import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Search() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Austin</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" />6 °F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li> Humidity: 75%</li>
            <li>Wind: 13mp/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// export default function Search() {
//   const [city, setCity] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [weatherData, setWeatherData] = useState({});

//   function handleSubmit(event) {
//     event.preventDefault();
//     getCityWeather();
//   }

//   function handleWeatherData(response) {
//     console.log(response.data);
//     setIsSubmitted(true);
//     setWeatherData(response.data);
//   }

//   function getCityWeather() {
//     const apiKey = "0c5cd3271ca5da27f88448575bac1056";
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
//     axios.get(apiUrl).then(handleWeatherData);
//   }

//   function updateCity(event) {
//     setCity(event.target.value);

//     if (isSubmitted) {
//       setIsSubmitted(false);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input type="search" onChange={updateCity} />
//           <input type="submit" value="search" />
//         </form>
//       </div>
//       {isSubmitted ? (
//         <div>
//           <ul>
//             <li>Temperature: {Math.round(weatherData.main.temp)}°F </li>
//             <li>Description: {weatherData.weather[0].description}</li>
//             <li>Humidity: {Math.round(weatherData.main.humidity)}%</li>
//             <li>Wind: {Math.round(weatherData.wind.speed)} m/hr </li>
//           </ul>
//         </div>
//       ) : null}
//     </div>
//   );
// }
