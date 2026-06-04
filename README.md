# Weather App India 🌤️

A beautiful weather application that displays region-specific weather with animated graphics for different seasons across India.

## ✨ Features

### Dynamic Animated Graphics
- 🔥 **Summer**: Bright sun with heat waves and fire effects
- ❄️ **Winter**: Falling snowflakes and icy conditions  
- 🌧️ **Rainy Season**: Animated rainfall and lightning
- 🌸 **Spring/Autumn**: Blooming flowers and flying butterflies

### All Indian Regions Supported
- 15+ Major Cities
- Real-time weather data
- Accurate temperature and conditions

### Responsive Design
- Works on all devices (desktop, tablet, mobile)
- Beautiful glassmorphic UI
- Smooth animations and transitions

### Detailed Weather Information
- Temperature & Feels-like temperature
- Humidity levels
- Wind speed
- Air pressure
- Visibility distance
- Weather description

### Unit Conversion
- Switch between Celsius and Fahrenheit
- Switch between m/s and mph for wind speed

## 📍 Supported Cities

- Delhi
- Mumbai
- Bangalore
- Kolkata
- Chennai
- Hyderabad
- Pune
- Jaipur
- Lucknow
- Ahmedabad
- Surat
- Indore
- Guwahati
- Bhopal
- Chandigarh

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/GulameArshad/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Update your API key in `src/App.js`:
```javascript
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
```

5. Start the application:
```bash
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🛠️ Technologies Used

- **React 18** - UI Library
- **Axios** - HTTP Client for API calls
- **SVG & CSS Animations** - Graphics and animations
- **OpenWeatherMap API** - Weather data
- **CSS3** - Styling and effects

## 📁 Project Structure

```
src/
├── components/
│   ├── WeatherDisplay.js
│   ├── LocationSelector.js
│   ├── LoadingSpinner.js
│   ├── ErrorMessage.js
│   ├── WeatherGraphics.js
│   └── graphics/
│       ├── SummerGraphics.js
│       ├── WinterGraphics.js
│       ├── RainyGraphics.js
│       └── SpringGraphics.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## ⚙️ How It Works

1. **Location Selection**: Choose your city from the dropdown
2. **API Fetch**: Get real-time weather data from OpenWeatherMap
3. **Season Detection**: App determines season based on temperature and weather conditions
4. **Graphics Rendering**: Displays animated graphics matching the season
5. **Data Display**: Shows detailed weather information in cards

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this project for personal and commercial purposes

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 🎯 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Weather alerts and notifications
- [ ] Air quality index (AQI)
- [ ] Sunrise/Sunset times
- [ ] UV Index
- [ ] More animation effects
- [ ] Dark/Light theme toggle
- [ ] Geolocation auto-detect

## 🆘 Support

If you face any issues:
1. Check that your API key is valid
2. Ensure internet connection is active
3. Check browser console for errors
4. Visit [OpenWeatherMap Documentation](https://openweathermap.org/api)

---

**Made with ❤️ by Gulame Arshad**
