import React from "react";
import { useWeatherStore } from "../../../stores/weatherStore";
import ForecastCard from "../ForecastCard";

export default function ForecastList() {
  const forecast = useWeatherStore((state) => state.forecast);

  if (!forecast || !forecast.list) {
    return null;
  }

  return (
    <div className="w-full flex justify-between gap-5">
      {forecast.list.map((day) => (
        <ForecastCard day={day} />
      ))}
    </div>
  );
}
