import type { WeatherData } from '../../types/weather';
import styles from './WeatherCard.module.css';

export const WeatherCard = ({ data }: { data: WeatherData }) => (
  <div className={styles.card}>
    <h2>{data.name}</h2>
    <p>Температура: {data.temp}°C</p>
    <p>Вологість: {data.humidity}%</p>
    <p>Вітер: {data.windSpeed} м/с</p>
  </div>
);