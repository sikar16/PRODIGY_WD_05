import React from 'react';

const WeatherCard = ({ city, weatherData }) => {
    if (!weatherData) return null;

    return (
        <div className="weather-card">
            <div className="weather-card-header">
                <h3 id="city-name">{weatherData.name}</h3>
                <p id="date">{new Date().toLocaleString()}</p>
            </div>
            <div className="weather-card-body">
                <img id="weather-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                <div className="weather-details">
                    <p id="temperature">{weatherData.main.temp}°C</p>
                    <p id="description">{weatherData.weather[0].description}</p>
                    <p id="wind-speed">Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
