import React, { useState } from "react";
import { useWeatherStore } from "../../../stores/weatherStore";

export default function SearchUi() {
  const [query, setQuery] = useState(null);
  const { searchCountry } = useWeatherStore();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log(query);
      searchCountry(query);
      setQuery("");
    }
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="relative flex items-center w-full group"
      >
        <svg
          className="absolute left-4 w-4 h-4 fill-zinc-400 transition-colors group-focus-within:fill-cyan-500"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          type="search"
          className="w-full h-10 pl-12 pr-4 leading-7 bg-zinc-800 border-2 border-transparent rounded-xl outline-none text-zinc-100 placeholder-zinc-500 transition-all duration-300 hover:bg-zinc-700 focus:bg-zinc-900 focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10"
        />
      </form>
    </div>
  );
}
