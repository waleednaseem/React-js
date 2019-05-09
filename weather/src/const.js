import { API_KEY } from './Secret';

export const WEATHER_URL = (city, country) => `https://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${API_KEY}`;