export const API_KEY = import.meta.env.VITE_API_KEY;
export const API = "https://api.openweathermap.org/data/2.5";
export const WEATHER_UNITS = "metric";
export const WEATHER_LANGUAGE = "eng";
export const DEFAULT_CITY = "Bishkek";

if (!API_KEY) throw new Error("VITE_APP_API_KEY не определён");
