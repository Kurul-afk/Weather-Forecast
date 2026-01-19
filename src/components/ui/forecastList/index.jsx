import React from "react";
import ForecastItem from "../forecastItem";
import { useWeatherStore } from "../../../stores/weatherStore";

export default function ForecastList() {
  const { currentForecast } = useWeatherStore();

  return (
    <>
      <div className="w-full mt-4">
        <h2 className="text-white font-bold text-xl">Weather Forecast</h2>
        {currentForecast?.list.map((forecastItem, idx) => (
          <ForecastItem key={idx} forecastData={forecastItem} />
        ))}
      </div>
    </>
  );
}
