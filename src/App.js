import React, { useState } from "react";
import { fetchWeather } from "./API/fetchWeather";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <p>{weather.weather[0].description}</p>
          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
              className="city-icon"
            />
          </div>
          <div className="city-temp">
            {Math.round(weather.main.temp - 273.15)}
            <sup>&deg;c</sup>
          </div>
          <marquee behavior="" direction="">
            Ground Level {Math.round(weather.main.grnd_level)} | Sea Level{" "}
            {Math.round(weather.main.sea_level)} | Humidity{" "}
            {Math.round(weather.main.humidity)} | Pressure{" "}
            {Math.round(weather.main.pressure)}
          </marquee>
        </div>
      )}
    </div>
  );
}

export default App;
