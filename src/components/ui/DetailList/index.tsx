import DetailCard from "../DetailCard";
import { useWeatherStore } from "../../../stores/weatherStore";
import {
  PressureIcon,
  VisibilityIcon,
  WindIcon,
} from "../../../assets";
import DropletsIcon from "../../../assets/DropletsIcon";

export default function DetailList() {
  const { weather, forecast } = useWeatherStore();

  if (!weather && !forecast) {
    return null;
  }

  const rainProbability = forecast?.list?.[0]?.pop
    ? Math.round(forecast.list[0].pop * 100) + "%"
    : "0%";

  const details = [
    {
      title: "Chance of precipitation",
      value: rainProbability,
      icon: <DropletsIcon />,
    },
    {
      title: "Wind speed",
      value: weather?.wind.speed,
      icon: <WindIcon />,
    },
    {
      title: "Visibility",
      value: weather?.visibility,
      icon: <VisibilityIcon />,
    },
    {
      title: "Pressure",
      value: weather?.main.pressure,
      icon: <PressureIcon />,
    },
  ];

  return (
    <div className="flex justify-between gap-5">
      {details.map((detail) => (
        <>
          <DetailCard
            value={detail.value}
            title={detail.title}
            icon={detail.icon}
          />
        </>
      ))}
    </div>
  );
}
