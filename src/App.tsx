import { useState } from 'react';
import { fetchWeatherData } from './services/weatherService';
import type { WeatherData } from './types/weather';
import { SearchForm } from './components/SearchForm/SearchForm';
import { WeatherCard } from './components/WeatherCard/WeatherCard';
import { History } from './components/History/History';
import './index.css';

export default function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleSearch = async (city: string) => {
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setHistory(prev => [data.name, ...prev.filter(i => i !== data.name)].slice(0, 5));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="app-container">
      <h1>Погода</h1>
      <SearchForm onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
      {history.length > 0 && <History list={history} onSelect={handleSearch} />}
    </div>
  );
}