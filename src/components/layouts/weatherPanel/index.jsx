import React from "react";
import Search from "../../ui/search";
import ForecastList from "../../ui/forecastList";
import CurrentWeatherDetails from "../../ui/currentWeatherDetails";

export default function WeatherPanel() {
  return (
    <div className="bg-gray-500/20 w-full p-5 backdrop-blur-sm overflow-auto mb-5 mt-[540px] rounded-xl xl:mt-0 xl:h-screen xl:max-w-sm xl:absolute xl:right-0 xl:rounded-none xl:ml-8 xl:mb-0">
      <Search className={"hidden xl:block"} />
      <div className="mt-8 flex flex-col items-start gap-2">
        <CurrentWeatherDetails />
        <div className="w-full h-0.5 mt-10 bg-white"></div>
        <ForecastList />
        <p className="hidden xl:block text-center text-white">
          made by <span>Arsen-AFK</span>
        </p>
      </div>
    </div>
  );
}
