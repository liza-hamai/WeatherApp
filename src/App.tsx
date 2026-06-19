import { useState } from 'react';
import { getCoordinates, getWeather } from './services/weatherService';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { WeatherData } from './types/weather';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const fetchWeather = async (cityName: string) => {
    const geo = await getCoordinates(cityName);
    if (!geo) return alert("Місто не знайдено");

    const data = await getWeather(geo.latitude, geo.longitude);
    
    const weatherInfo: WeatherData = {
      name: geo.name,
      temp: data.temperature_2m,
      description: "Ясно", // Open-Meteo базова версія не завжди дає текстовий опис
      humidity: data.relative_humidity_2m,
      windSpeed: data.wind_speed_10m,
    };

    setWeather(weatherInfo);

    // Логіка історії
    setHistory(prev => {
      const filtered = prev.filter(item => item !== geo.name);
      return [geo.name, ...filtered].slice(0, 5);
    });
  };

  return (
    <div className="container">
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => fetchWeather(city)}>Пошук</button>

      {weather && <WeatherCard data={weather} />}

      {history.length > 0 && (
        <div className="history">
          <h3>Історія:</h3>
          {history.map(item => (
            <button key={item} onClick={() => fetchWeather(item)}>{item}</button>
          ))}
        </div>
      )}
    </div>
  );
}