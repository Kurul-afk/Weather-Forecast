import React from "react";
import { useWeatherStore } from "../../../stores/weatherStore";
import { weatherIcons } from "../../../utils/weatherIcons";
import { CloudsIcon } from "../../../assets";

export default function MainCard() {
  const { weather } = useWeatherStore();

  const iconCode = weather?.weather[0].icon;

  return (
    <div className="bg-zinc-800 w-full rounded-2xl ring-1 ring-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="pt-20 px-10 pb-10 flex justify-between">
        <div>
          <h2 className="text-8xl text-white mb-10">
            {Math.round(weather?.main.temp)}
            <span className="text-3xl"> °C</span>
          </h2>
          <p className="text-white text-xl mb-5">
            {weather?.sys.country}, {weather?.name}
          </p>
          <div className="flex gap-5">
            <div>
              <p className="text-white">Feels like</p>
              <p className="text-white">
                {Math.round(weather?.main.feels_like)}°C
              </p>
            </div>
            <div>
              <p className="text-white">Humidity</p>
              <p className="text-white">{weather?.main.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="w-64 h-64 flex justify-center items-center">
          {iconCode && weatherIcons[iconCode] ? (
            weatherIcons[iconCode]
          ) : (
            <>
              <CloudsIcon />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
