import axios from "axios";
import { API, API_KEY, WEATHER_LANGUAGE, WEATHER_UNITS } from "../../constants";

export const getCurrentWeather = async (currentCity: string) => {
  try {
    const res = await axios.get(`${API}/weather`, {
      params: {
        q: currentCity,
        appid: API_KEY,
        units: WEATHER_UNITS,
        lang: WEATHER_LANGUAGE,
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getForecast = async (currentCity: string) => {
  try {
    const res = await axios.get(`${API}/forecast`, {
      params: {
        q: currentCity,
        appid: API_KEY,
        units: WEATHER_UNITS,
        lang: WEATHER_LANGUAGE,
      },
    });
    return res.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
