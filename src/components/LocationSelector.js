import React from 'react';
import './LocationSelector.css';

function LocationSelector({ cities, selectedCity, onCityChange }) {
  return (
    <div className="location-selector">
      <label htmlFor="city-select">Select Your City:</label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="city-select"
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSelector;
