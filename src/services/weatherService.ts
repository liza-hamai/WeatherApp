import axios from 'axios';
import type { WeatherData } from '../types/weather';

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const geoRes = await axios.get(`${GEO_API}?name=${city}&count=1&language=uk&format=json`);
  const geo = geoRes.data.results?.[0];
  if (!geo) throw new Error("Місто не знайдено");

  const weatherRes = await axios.get(
    `${WEATHER_API}?latitude=${geo.latitude}&longitude=${geo.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
  );
  
  const data = weatherRes.data.current;
  return {
    name: geo.name,
    temp: data.temperature_2m,
    description: "Ясно",
    humidity: data.relative_humidity_2m,
    windSpeed: data.wind_speed_10m,
  };
};