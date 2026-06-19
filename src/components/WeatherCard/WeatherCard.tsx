import styles from './WeatherCard.module.css';
import type { WeatherData } from '../../types/weather';

interface Props {
  data: WeatherData;
}

export const WeatherCard = ({ data }: Props) => (
  <div className={styles.card}>
    <h2>{data.name}</h2>
    <p>Температура: {data.temp}°C</p>
    <p>Вологість: {data.humidity}%</p>
    <p>Вітер: {data.windSpeed} м/с</p>
  </div>
);