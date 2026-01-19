export const APP_API_URL = import.meta.env.VITE_APP_API_URL;
export const API_KEY = import.meta.env.VITE_APP_API_KEY;
export const WEATHER_UNITS = "metric";
export const WEATHER_LANGUAGE = "en";
export const DEFAULT_CITY = "Bishkek";

if (!APP_API_URL) throw new Error("VITE_APP_API_URL не определён");
if (!API_KEY) throw new Error("VITE_APP_API_KEY не определён");
