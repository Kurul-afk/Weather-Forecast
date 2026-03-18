import { toast } from "react-toastify";
import { create } from "zustand";
import { getCurrentWeather, getForecast } from "../../hooks/useWeather";
import type { WeatherStore } from "../../types";

export const useWeatherStore = create<WeatherStore>((set) => ({
  weather: null,
  forecast: null,
  error: null,
  isLoading: false,
  fetchWeather: async (city) => {
    if (!city || !city.trim()) return null;
    set({
      isLoading: true,
      error: null,
    });
    try {
      const weatherData = await getCurrentWeather(city);
      if (weatherData) {
        set({
          weather: weatherData,
          isLoading: false,
        });
      } else {
        set({
          isLoading: false,
        });
        return null;
      }
      console.log(weatherData);
      return weatherData;
    } catch (error: any) {
      console.log(`Weather error fetch: ${error.message}`);
      set({
        error: error.message || "Failed to fetch data",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при получении данных");
      return null;
    }
  },
  fetchForecast: async (city) => {
    if (!city || !city.trim()) return null;
    set({
      isLoading: true,
      error: null,
    });
    try {
      const forecastData = await getForecast(city);
      if (forecastData) {
        const filteredForecast = forecastData.list.filter((item: any) =>
          item.dt_txt.includes("12:00:00"),
        );
        console.log(forecastData.list[0].dt_txt);
        set({
          forecast: {
            ...forecastData,
            list: filteredForecast,
          },
          isLoading: false,
        });
      } else {
        set({
          isLoading: false,
        });
        return null;
      }
    } catch (error: any) {
      console.log(`Forecast error fetch: ${error.message}`);
      set({
        error: error.message || "Failed to fetch data",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при получении данных");
      return null;
    }
  },
  searchCountry: async (city) => {
    if (!city?.trim()) return null;
    set({
      isLoading: true,
      error: null,
    });
    try {
      const [weatherData, forecastData]: any = await Promise.all([
        getCurrentWeather(city),
        getForecast(city),
      ]);
      if (weatherData && forecastData) {
        const filteredForecast = {
          ...forecastData,
          list: forecastData.list.filter((item: any) =>
            item.dt_txt.includes("12:00:00"),
          ),
        };
        set({
          weather: weatherData,
          forecast: filteredForecast,
          isLoading: false,
        });
        return { weatherData, forecastData: filteredForecast };
      } else {
        set({
          isLoading: false,
        });
        return null;
      }
    } catch (error: any) {
      console.log(`search City error: ${error.message}`);
      set({
        error: error.message || "Failed to search city",
        isLoading: false,
      });
      toast.error(error.message || "Ошибка при поиске города");
      return null;
    }
  },
  resetWeather: () => {
    set({
      weather: null,
      forecast: null,
      isLoading: false,
      error: null,
    });
  },
}));
