import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          // alert('City not found. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          id="city-input"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button id="city-input-btn">
          Get Weather
        </button>
      </div>
      <WeatherCard city={city} weatherData={weatherData} />
    </div>
  );
}

export default App;
