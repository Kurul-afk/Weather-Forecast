import Rainy from "../../../assets/icons/rainy";
import { formatCityLocalTime } from "../../../utils/formatTimeZone";
import Cloudy from "../../../assets/icons/cloudy";
import Snowfall from "../../../assets/icons/snowfall";
import Stormy from "../../../assets/icons/stormy";
import Sunny from "../../../assets/icons/sunny";

export default function WeatherInfo({ currentWeather }) {
  const cityTime = formatCityLocalTime(
    currentWeather?.timezone,
    currentWeather?.dt,
  );

  const weatherMain = currentWeather?.weather?.[0]?.main;
  const weatherDesc = currentWeather?.weather?.[0]?.description;

  let WeatherIcon = null;
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
    case "Clouds":
      WeatherIcon = Cloudy;
      break;
    case "Clear":
      WeatherIcon = Sunny;
      break;
    default:
      WeatherIcon = Cloudy;
  }

  return (
    <div className="flex items-end absolute top-[500px] left-5 w-full sm:justify-start gap-3 xl:m-0 xl:top-[680px] xl:left-10">
      <h1 className="text-white text-6xl lg:text-7xl xl:text-9xl">
        {currentWeather?.main?.temp
          ? Math.round(currentWeather.main.temp)
          : "Loading..."}
        °C
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-white text-4xl lg:text-5xl xl:text-6xl">
          {currentWeather?.name}
        </p>
        <p className="text-white text-base lg:text-lg  xl:text-xl">
          {cityTime}
        </p>
      </div>
      {WeatherIcon && (
        <WeatherIcon width={96} height={96} className="text-white shrink-0" />
      )}
    </div>
  );
}
