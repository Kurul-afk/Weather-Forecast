interface CoordCondition {
  lon: string;
  lat: string;
}
interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface MainCondition {
  temp: number;
  feels_like: number;
  temp_min?: number;
  temp_max?: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}
interface WindCondition {
  speed: number;
  deg: number;
  gust: number;
}
interface CloudsCondition {
  all: number;
}
interface SysWeatherCondition {
  country: string;
  sunrise: number;
  sunset: number;
}
interface SysForecastCondition {
  pod?: string;
}
export interface WeatherDataState {
  coord: CoordCondition;
  weather: WeatherCondition[];
  base: string;
  main: MainCondition;
  visibility: number;
  wind: WindCondition;
  clouds: CloudsCondition;
  dt: number;
  sys: SysWeatherCondition;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface ForecastDataList {
  dt: number;
  main: MainCondition;
  weather: WeatherCondition[];
  clouds: CloudsCondition;
  wind: WindCondition;
  visibility: number;
  pop: number;
  sys: SysForecastCondition;
  dt_text: string;
}
interface ForecastCityData {
  id: number;
  name: string;
  coord: CoordCondition;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastDataState {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastDataList[];
  city: ForecastCityData;
}
interface WeatherState {
  weather: WeatherDataState | null;
  forecast: ForecastDataState | null;
  error: string | null;
  isLoading: boolean;
}

interface WeatherAction {
  fetchWeather: (city: string) => Promise<WeatherDataState | null>;
  fetchForecast: (city: string) => Promise<ForecastDataState | null>;
  searchCountry: (city: string) => Promise<{
    weatherData: WeatherDataState;
    forecastData: ForecastDataState;
  } | null>;
  resetWeather: () => void;
}

export interface FilteredForecast {
  dt: number;
  main: MainCondition;
  weather: WeatherCondition;
  clouds: CloudsCondition;
  wind: WindCondition;
  visibility: number;
  pop: number;
  sys: {
    pod: "d" | "n";
  };
  dt_text: string;
}

export type WeatherStore = WeatherState & WeatherAction;

export interface ForecastCardProps {
  day: ForecastDataList;
}
