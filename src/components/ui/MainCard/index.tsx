import { useWeatherStore } from "../../../stores/weatherStore";
import { weatherIcons } from "../../../utils/weatherIcons";
import { CloudsIcon } from "../../../assets";
import WeatherBackground from "../WeatherBackground/WeatherBackground";

export default function MainCard() {
  const { weather } = useWeatherStore();

  const iconCode = weather?.weather[0].icon;

  return (
    <div className="bg-zinc-800 w-full rounded-2xl relative  overflow-hidden">
      <WeatherBackground iconCode={iconCode} />
      <div className="pt-20 px-10 pb-10 flex justify-between relative  z-10">
        <div>
          <h2 className="text-8xl text-white mb-10">
            {Math.round(weather?.main.temp ?? 0)}
            <span className="text-3xl"> °C</span>
          </h2>
          <p className="text-white text-xl mb-5">
            {weather?.sys.country}, {weather?.name}
          </p>
          <div className="flex gap-5">
            <div>
              <p className="text-white">Feels like</p>
              <p className="text-white">
                {Math.round(weather?.main.feels_like ?? 0)}°C
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
