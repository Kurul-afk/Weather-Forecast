import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useWeatherStore } from "./stores/weatherStore";
import WeatherInfo from "./components/layouts/weatherInfo";
import WeatherPanel from "./components/layouts/weatherPanel";
import { DEFAULT_CITY } from "./constants/weather";
import Search from "./components/ui/search";
import Background from "./components/layouts/Background";

export default function App() {
  const { currentWeather, fetchWeather, fetchForecast, error, isLoading } =
    useWeatherStore();

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
    fetchForecast(DEFAULT_CITY);
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="min-h-screen w-full overflow-hidden relative">
        <Background />
        <div className="relative z-10">
          <div className="w-full max-w-[1920px] mx-auto px-6">
            <div className="flex flex-col items-center gap-3 xl:flex-row xl:items-start">
              <div className="relative w-full mt-6">
                <header className="flex justify-between">
                  <Search className={"block xl:hidden"} />
                </header>
                <WeatherInfo currentWeather={currentWeather} />
              </div>
              <WeatherPanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
