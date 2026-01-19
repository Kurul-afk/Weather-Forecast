import React, { useState, useRef } from "react";
import { useWeatherStore } from "../../../stores/weatherStore";

export default function Search({ className }) {
  const { fetchWeather, fetchForecast } = useWeatherStore();
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const labelChars = ["П", "о", "и", "с", "к"];
  const isActive = searchValue || isFocused;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      fetchWeather(searchValue.trim());
      fetchForecast(searchValue.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      if (searchValue.trim()) {
        fetchWeather(searchValue.trim());
        fetchForecast(searchValue.trim());
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-[100%] mb-10 sm:max-w-xs md:max-w-sm xl:mt-6 ${className}`}
    >
      <input
        ref={inputRef}
        required
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className="block w-full text-base text-white pt-[10px] pb-[10px] pl-[5px] pr-[40px] border-none border-b border-gray-600 bg-transparent focus:outline-none"
      />

      <label className="absolute left-[5px] top-[10px] pointer-events-none flex text-lg text-white font-normal">
        {labelChars.map((char, index) => (
          <span
            key={index}
            className={`transition-all duration-200 ease-in-out ${
              isActive ? "-translate-y-5 text-sm text-white" : ""
            }`}
            style={{
              transitionDelay: `${index * 0.05}s`,
            }}
          >
            {char}
          </span>
        ))}
      </label>

      <div className="relative block w-full">
        <div
          className={`absolute bottom-[1px] left-0 h-0.5 transition-all duration-200 ease-in-out ${
            isActive ? "w-1/2 bg-green-500" : "w-0 bg-white"
          }`}
        ></div>
        <div
          className={`absolute bottom-[1px] right-0 h-0.5 transition-all duration-200 ease-in-out ${
            isActive ? "w-1/2 bg-green-500" : "w-0 bg-white"
          }`}
        ></div>
      </div>

      <button
        type="button"
        onClick={handleIconClick}
        className="absolute top-2 right-2 p-1 rounded-full transition-colors"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke={isActive ? "#22c55e" : "#FFFFFF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
