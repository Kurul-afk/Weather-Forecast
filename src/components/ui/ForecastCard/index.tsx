import { useEffect } from "react";
import type { ForecastCardProps } from "../../../types";
import { weatherIcons } from "../../../utils/weatherIcons";

export default function ForecastCard({ day }: ForecastCardProps) {
  const date = new Date(day.dt * 1000).toLocaleDateString("en-EN", {
    weekday: "short",
    day: "numeric",
  });

  useEffect(() => {
    console.log(day, "test");
  }, []);

  const iconCode = day?.weather[0].icon;

  return (
    <div className="w-full h-full max-h-[180px] bg-zinc-600 rounded ring-1 ring-zinc-400 transition-all hover:shadow-lg hover:shadow-cyan-400/50 hover:ring-cyan-400">
      <div className="flex flex-col items-center justify-center py-5 px-5 gap-2">
        <p className="text-zinc-300">{date}</p>
        <div className="w-16 h-16 flex justify-center items-center drop-shadow-md">
          {weatherIcons[iconCode] || weatherIcons["01d"]}
        </div>
        <p className="text-cyan-400">{Math.round(day.main.temp)}°C</p>
        <p className="text-zinc-300">{day.weather[0].description}</p>
      </div>
    </div>
  );
}
