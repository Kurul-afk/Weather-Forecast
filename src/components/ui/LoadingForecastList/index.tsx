function LoadingForecastListCard() {
  return (
    <div className="w-full h-full max-h-[200px] bg-zinc-600 rounded ring-1 ring-zinc-400 transition-all hover:shadow-lg hover:shadow-cyan-400/50 hover:ring-cyan-400">
      <div className="animate-pulse flex flex-col items-center justify-center py-5 px-5 gap-2">
        <div className="w-full h-5 rounded-2xl bg-zinc-400"></div>
        <div className="w-full h-16 rounded-2xl bg-zinc-400"></div>
        <div className="w-full h-5 rounded-2xl bg-zinc-400"></div>
        <div className="w-full h-5 rounded-2xl bg-zinc-400"></div>
      </div>
    </div>
  );
}

export default function LoadingForecastList() {
  return (
    <div className="w-full flex justify-between gap-5">
      {[1, 2, 3, 4, 5].map(() => (
        <>
          <LoadingForecastListCard />
        </>
      ))}
    </div>
  );
}
