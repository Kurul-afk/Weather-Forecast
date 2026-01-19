import axios from "axios";
import { toast } from "react-toastify";
import {
  API_KEY,
  APP_API_URL,
  WEATHER_LANGUAGE,
  WEATHER_UNITS,
} from "../constants/weather";

export const getCurrentWeather = async (city) => {
  if (!city) return null;
  try {
    const res = await axios.get(`${APP_API_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: WEATHER_UNITS,
        lang: WEATHER_LANGUAGE,
      },
    });
    return res.data;
  } catch (error) {
    const status = error?.response?.status;
    if (status === 400) {
      toast.error("Неверный запрос (400)");
    } else if (status === 404) {
      toast.error("Город не найден (404)");
    } else {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Ошибка при получении данных",
      );
    }
    console.error("getCurrentWeather - Ошибка:", error);
    return null;
  }
};

export const getForecast = async (city) => {
  if (!city) return null;
  try {
    const res = await axios.get(`${APP_API_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: WEATHER_UNITS,
        lang: WEATHER_LANGUAGE,
        cnt: 6,
      },
    });
    return res.data;
  } catch (error) {
    const status = error?.response?.status;
    if (status === 400) {
      toast.error("Неверный запрос прогноза (400)");
    } else if (status === 404) {
      toast.error("Прогноз для города не найден (404)");
    } else {
      toast.error(
        error?.response?.data?.message ||
          error.message ||
          "Ошибка при получении данных service",
      );
    }
    console.error("getForecast - Ошибка:", error);
    return null;
  }
};
