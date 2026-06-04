import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import LocationSelector from './components/LocationSelector';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key from openweathermap.org

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const [unit, setUnit] = useState('metric'); // celsius

  // Indian cities with coordinates
  const indianCities = [
    { name: 'Delhi', lat: 28.7041, lon: 77.1025 },
    { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
    { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
    { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
    { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
    { name: 'Hyderabad', lat: 17.3850, lon: 78.4867 },
    { name: 'Pune', lat: 18.5204, lon: 73.8567 },
    { name: 'Jaipur', lat: 26.9124, lon: 75.7873 },
    { name: 'Lucknow', lat: 26.8467, lon: 80.9462 },
    { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714 },
    { name: 'Surat', lat: 21.1702, lon: 72.8311 },
    { name: 'Indore', lat: 22.7196, lon: 75.8577 },
    { name: 'Guwahati', lat: 26.1445, lon: 91.7362 },
    { name: 'Bhopal', lat: 23.1815, lon: 79.9864 },
    { name: 'Chandigarh', lat: 30.7333, lon: 76.8277 },
  ];

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity, unit]);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      
      const cityObj = indianCities.find(c => c.name === city);
      if (!cityObj) {
        setError('City not found');
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityObj.lat}&lon=${cityObj.lon}&appid=${API_KEY}&units=${unit}`
      );

      setWeather(response.data);
      setError(null);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('Unable to fetch weather data. Please check your API key or try again later.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleUnitChange = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌤️ Weather App India</h1>
        <p>Get beautiful weather animations for your region</p>
      </header>

      <main className="app-main">
        <LocationSelector 
          cities={indianCities}
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
        />

        <div className="controls">
          <button 
            className="unit-button"
            onClick={handleUnitChange}
          >
            °{unit === 'metric' ? 'C' : 'F'} | Switch to °{unit === 'metric' ? 'F' : 'C'}
          </button>
        </div>

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {weather && !loading && (
          <WeatherDisplay weather={weather} unit={unit} city={selectedCity} />
        )}
      </main>

      <footer className="app-footer">
        <p>🌍 Weather data provided by OpenWeatherMap</p>
        <p>© 2024 Weather App India - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
