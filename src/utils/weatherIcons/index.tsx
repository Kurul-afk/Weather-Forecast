import { CloudsIcon, MistIcon, RainIcon, ThunderstormIcon } from "../../assets";
import ClearMoonIcon from "../../assets/ClearMoonIcon";
import ClearSunIcon from "../../assets/ClearSunIcon";
import CloudsMoonIcon from "../../assets/CloudsMoonIcon";
import CloudsSunIcon from "../../assets/CloudsSunIcon";
import Snowicon from "../../assets/Snowicon";

export const weatherIcons: { [key: string]: React.ReactNode } = {
  // Ясно
  "01d": <ClearSunIcon />,
  "01n": <ClearMoonIcon />,
  // Облачно
  "02d": <CloudsSunIcon />,
  "02n": <CloudsMoonIcon />,
  "03d": <CloudsIcon />,
  "03n": <CloudsIcon />,
  "04d": <CloudsIcon />,
  "04n": <CloudsIcon />,
  // Дождь
  "09d": <RainIcon />,
  "09n": <RainIcon />,
  "10d": <RainIcon />,
  "10n": <RainIcon />,
  // Гроза
  "11d": <ThunderstormIcon />,
  "11n": <ThunderstormIcon />,
  // Снег
  "13d": <Snowicon />,
  "13n": <Snowicon />,
  // Туман
  "50d": <MistIcon />,
  "50n": <MistIcon />,
};
