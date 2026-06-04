import React from 'react';
import WeatherGraphics from './WeatherGraphics';
import './WeatherDisplay.css';

function WeatherDisplay({ weather, unit, city }) {
  const getSeason = (temp, weatherMain) => {
    if (weatherMain.includes('Snow') || temp < 5) {
      return 'winter';
    } else if (weatherMain.includes('Rain') || weatherMain.includes('Drizzle')) {
      return 'rainy';
    } else if (temp > 35) {
      return 'summer';
    } else if (temp > 15 && temp <= 25) {
      return 'spring';
    } else {
      return 'autumn';
    }
  };

  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const humidity = weather.main.humidity;
  const windSpeed = Math.round(weather.wind.speed);
  const description = weather.weather[0].description;
  const pressure = weather.main.pressure;
  const visibility = (weather.visibility / 1000).toFixed(1);

  const season = getSeason(temp, weather.weather[0].main);
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';

  return (
    <div className="weather-display">
      <div className="weather-container">
        <h2 className="city-name">{city}</h2>
        
        <div className="graphics-section">
          <WeatherGraphics season={season} weather={weather.weather[0].main} />
        </div>

        <div className="main-weather-info">
          <div className="temperature-display">
            <span className="temperature">{temp}</span>
            <span className="unit">{tempUnit}</span>
          </div>
          <p className="description">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
          <p className="feels-like">Feels like {feelsLike}{tempUnit}</p>
        </div>

        <div className="weather-details-grid">
          <div className="detail-card">
            <div className="detail-icon">💧</div>
            <div className="detail-content">
              <p className="detail-label">Humidity</p>
              <p className="detail-value">{humidity}%</p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">💨</div>
            <div className="detail-content">
              <p className="detail-label">Wind Speed</p>
              <p className="detail-value">{windSpeed} {windUnit}</p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">🔽</div>
            <div className="detail-content">
              <p className="detail-label">Pressure</p>
              <p className="detail-value">{pressure} hPa</p>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-icon">👁️</div>
            <div className="detail-content">
              <p className="detail-label">Visibility</p>
              <p className="detail-value">{visibility} km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
