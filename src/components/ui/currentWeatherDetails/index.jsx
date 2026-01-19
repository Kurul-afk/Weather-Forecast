import React from "react";
import { useWeatherStore } from "../../../stores/weatherStore";

export default function CurrentWeatherDetails() {
  const { currentWeather } = useWeatherStore();
  return (
    <>
      <h2 className="text-white font-bold text-xl">Weather Details</h2>
      <div className="flex flex-col gap-4 mt-4 text-white">
        <p>Humidity: {currentWeather?.main?.humidity}%</p>
        <p>Cloudiness: {currentWeather?.clouds?.all}%</p>
        <p>Pressure: {currentWeather?.main?.pressure} hPa</p>
        <p>Wind Speed: {currentWeather?.wind?.speed} m/s</p>
      </div>
    </>
  );
}
