import React from 'react';
import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "Paris",
      temperature: 30,
      date: "Monday 12:00",
      description: "Sunny",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: 32,
      wind: 6
    };
  
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="searchform">
            <div className="search">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-info"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="degree-units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  