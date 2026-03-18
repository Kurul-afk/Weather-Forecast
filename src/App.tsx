import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import MainCard from "./components/ui/MainCard";
import "./App.css";
import SearchUi from "./components/ui/SearchUi";
import { useWeatherStore } from "./stores/weatherStore";
import { DEFAULT_CITY } from "./constants";
import ForecastList from "./components/ui/ForecastList";
import DetailList from "./components/ui/DetailList";

export default function App() {
  const { searchCountry, forecast } = useWeatherStore();
  useEffect(() => {
    searchCountry(DEFAULT_CITY);
    console.log(forecast);
  }, [DEFAULT_CITY]);

  return (
    <>
      <ToastContainer
        pauseOnFocusLoss
        newestOnTop
        closeOnClick
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="overflow-hidden relative bg-zinc-900 min-h-screen">
        <main className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col gap-8">
          <SearchUi />
          <section className="w-full flex justify-between">
            <MainCard />
          </section>
          <section>
            <h2 className="text-zinc-200 text-3xl mb-5">Forecast</h2>
            <ForecastList />
          </section>
          <section>
            <h2 className="text-zinc-200 text-3xl mb-5">Details</h2>
            <DetailList />
          </section>
        </main>
      </div>
    </>
  );
}
