export interface WeatherData {
  name: string;
  temp: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface GeocodingResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}