import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import MainCard from "./components/ui/MainCard";
import "./App.css";
import SearchUi from "./components/ui/SearchUi";
import { useWeatherStore } from "./stores/weatherStore";
import { DEFAULT_CITY } from "./constants";
import ForecastList from "./components/ui/ForecastList";
import DetailList from "./components/ui/DetailList";
import LoadingMainCard from "./components/ui/LoadingMainCard";
import LoadingForecastList from "./components/ui/LoadingForecastList";
import LoadingDetailList from "./components/ui/LoadingDetailList";

export default function App() {
  const { searchCountry, forecast, isLoading } = useWeatherStore();
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
          <section className="w-full flex flex-col gap-5 justify-between">
            {isLoading ? (
              <>
                <LoadingMainCard />
              </>
            ) : (
              <>
                <MainCard />
              </>
            )}
          </section>
          <section>
            <h2 className="text-zinc-200 text-3xl mb-5">Forecast</h2>
            {isLoading ? (
              <>
                <LoadingForecastList />
              </>
            ) : (
              <>
                <ForecastList />
              </>
            )}
          </section>
          <section>
            <h2 className="text-zinc-200 text-3xl mb-5">Details</h2>
            {isLoading ? (
              <>
                <LoadingDetailList />
              </>
            ) : (
              <>
                <DetailList />
              </>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
