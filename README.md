# Weather App

A simple weather application built using React and the OpenWeather API. This app allows users to search for current weather information by entering a city name.

## Features
- Search for current weather by city name.
- Displays:
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
- Clean and responsive user interface.

## Project Structure
```
weather-app/
│
├── src/
│   ├── components/
│   │   ├── WeatherCard.js       // Displays weather details.
│   │   ├── SearchBar.js         // Search bar for inputting city names.
│   ├── App.js                   // Main application file.
│   ├── index.js                 // Application entry point.
│   ├── index.css                // Global styles.
```

## Setup and Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/lamkaichim/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Obtain an API key from [OpenWeather API](https://openweathermap.org/api).

4. Replace `YOUR_API_KEY` in `App.js` with your OpenWeather API key.

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Deployment

This project can be deployed using GitHub Pages or any static hosting service. Follow the steps below to deploy on GitHub Pages:

1. Install GitHub Pages as a dependency:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the app:
   ```bash
   npm run deploy
   ```

## Technologies Used
- React
- OpenWeather API
- JavaScript
- HTML
- CSS

## Future Enhancements
- Add hourly and weekly forecasts.
- Improve UI/UX with animations and themes.
- Include geolocation-based weather search.

## License
This project is licensed under the MIT License.

