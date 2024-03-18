import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [city, setCity] = useState("");
  let [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        let temperature = Math.round(response.data.main.temp);
        let description = response.data.weather[0].description;
        let humidity = response.data.main.humidity;
        let windSpeed = response.data.wind.speed;

        let newResult = {
          temperature,
          description,
          humidity,
          windSpeed,
        };
        setResult(newResult);
        setCity("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="WeatherSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {result && (
        <div>
          <br />
          Temperature: {result.temperature}ºC
          <br />
          Description: {result.description}
          <br />
          Humidity: {result.humidity}%
          <br />
          Wind: {result.windSpeed} km/h
        </div>
      )}
    </div>
  );
}
