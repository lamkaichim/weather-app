import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const apiKey = '47cc6f05810ec95c61bbbd826eb87457'; 

    const fetchWeather = async () => {
        if (!city) return;

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();

            if (data.cod === 200) {
                setWeather(data);
            } else {
                alert('City not found!');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Weather App</h1>
            <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;