import axios from 'axios';

const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

export const getCoordinates = async (city: string) => {
  const res = await axios.get(`${GEO_API}?name=${city}&count=1&language=uk&format=json`);
  return res.data.results?.[0];
};

export const getWeather = async (lat: number, lon: number) => {
  const res = await axios.get(
    `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
  );
  return res.data.current;
};