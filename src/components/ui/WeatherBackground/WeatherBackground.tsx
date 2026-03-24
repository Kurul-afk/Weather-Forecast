import { useMemo } from "react";
import ClearSunScene from "./Scenes/ClearSunScene";
import ClearMoonScene from "./Scenes/ClearMoonScene";
import ThunderStormScene from "./Scenes/ThunderStormScene";
import SnowScene from "./Scenes/SnowScene";
import RainScene from "./Scenes/RainScene";
import CloudsScene from "./Scenes/CloudsScene";

interface Props {
  iconCode: string | undefined;
}

export default function WeatherBackground({ iconCode }: Props) {
  const WeatherScene = useMemo(() => {
    if (!iconCode) return null;

    switch (true) {
      case ["01d"].includes(iconCode):
        return <ClearSunScene />;
      case ["01n"].includes(iconCode):
        return <ClearMoonScene />;
      case ["11d", "11n"].includes(iconCode):
        return <ThunderStormScene />;
      case ["13d", "13n"].includes(iconCode):
        return <SnowScene />;
      case ["09d", "09n", "10d", "10n"].includes(iconCode):
        return <RainScene />;
      case ["02d", "02n", "03d", "03n", "04d", "04n"].includes(iconCode):
        return <CloudsScene />;
      case ["50d", "50n"].includes(iconCode):
        return <CloudsScene />;

      default:
        return <ClearSunScene />;
    }
  }, [iconCode]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
      {WeatherScene}
    </div>
  );
}
