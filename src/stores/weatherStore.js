import { create } from "zustand";
import { getCurrentWeather, getForecast } from "../services/weatherService";
import { toast } from "react-toastify";

export const useWeatherStore = create((set) => ({
  currentWeather: null,
  currentForecast: null,
  isLoading: false,
  error: null,
  lastCity: null,
  abortController: null,
  fetchWeather: async (cityName) => {
    if (!cityName || !cityName.trim()) return null;
    set({
      isLoading: true,
      error: null,
    });
    try {
      const weatherData = await getCurrentWeather(cityName);
      if (weatherData) {
        set({
          currentWeather: weatherData,
          lastCity: cityName,
          isLoading: false,
          error: null,
        });
      } else {
        set({ isLoading: false });
      }
      console.log(weatherData);
      return weatherData;
    } catch (error) {
      console.log(`Weather error fetch: ${error.message}`);
      set({
        error: error.message || "Failed to fetch data!",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при получении данных");
      return null;
    }
  },
  fetchForecast: async (cityName) => {
    if (!cityName || !cityName.trim()) return null;
    set({
      isLoading: true,
      error: null,
    });
    try {
      const forecastData = await getForecast(cityName);
      if (forecastData) {
        set({
          currentForecast: forecastData,
          isLoading: false,
          error: null,
        });
      } else {
        set({ isLoading: false });
      }
      console.log(forecastData);
      return forecastData;
    } catch (error) {
      console.log(`Forecast error fetch: ${error.message}`);
      set({
        error: error.message || "Failed to fetch data!",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при получении данных store");
      return null;
    }
  },
  // new helper to perform a safe search: only fetch forecast if weather fetch succeeded
  searchCity: async (cityName) => {
    if (!cityName || !cityName.trim()) return null;
    set({ isLoading: true, error: null });
    try {
      const weatherData = await getCurrentWeather(cityName);
      if (!weatherData) {
        set({ isLoading: false });
        return null;
      }
      set({
        currentWeather: weatherData,
        lastCity: cityName,
        isLoading: false,
        error: null,
      });
      const forecastData = await getForecast(cityName);
      if (forecastData) {
        set({ currentForecast: forecastData });
      }
      return { weatherData, forecastData };
    } catch (error) {
      console.log(`searchCity error: ${error.message}`);
      set({
        error: error.message || "Failed to search city",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при поиске города");
      return null;
    }
  },
  resetWeather: () =>
    set({
      currentWeather: null,
      error: null,
    }),
}));
