import React from "react";
import Cloudy from "../../../assets/icons/cloudy";
import Rainy from "../../../assets/icons/rainy";
import Snowfall from "../../../assets/icons/snowfall";
import Stormy from "../../../assets/icons/stormy";
import Sunny from "../../../assets/icons/sunny";

export default function ForecastItem({ forecastData }) {
  const weatherMain = forecastData?.weather?.[0]?.main;
  const weatherDesc = forecastData?.weather?.[0]?.description;

  let WeatherIcon = Cloudy;
  switch (weatherMain) {
    case "Rain":
    case "Drizzle":
      WeatherIcon = Rainy;
      break;
    case "Snow":
      WeatherIcon = Snowfall;
      break;
    case "Thunderstorm":
      WeatherIcon = Stormy;
      break;
    case "Clear":
      WeatherIcon = Sunny;
      break;
    case "Clouds":
    default:
      WeatherIcon = Cloudy;
  }

  return (
    <>
      <div className="flex gap-4 mt-2 p-2 cursor-pointer rounded-md items-center hover:bg-white/10 hover:transition-all hover:shadow-xl hover:shadow-white/10">
        <div>
          {WeatherIcon && (
            <WeatherIcon width={48} height={48} className="text-white" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white">{forecastData.dt_txt.split(" ")[1]}</p>
          <p className="text-white capitalize">{weatherDesc}</p>
        </div>
        <div className="ml-auto mt-auto">
          <p className="text-white text-xl">
            {Math.round(forecastData.main.temp)}°C
          </p>
        </div>
      </div>
    </>
  );
}
