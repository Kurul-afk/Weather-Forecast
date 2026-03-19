export default function LoadingMainCard() {
  return (
    <div className="bg-zinc-800 w-full rounded-2xl ring-1 ring-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="pt-20 px-10 pb-10 flex justify-between items-center animate-pulse">
        <div>
          <div className="bg-zinc-600 h-20 w-36 rounded-2xl mb-10"></div>
          <div className="bg-zinc-600 h-5 w-30 rounded-2xl mb-5"></div>
          <div className="flex gap-5">
            <div className="bg-zinc-600 h-5 w-20 rounded-2xl"></div>
            <div className="bg-zinc-600 h-5 w-20 rounded-2xl mr-5"></div>
          </div>
        </div>
        <div className="w-[240px] h-[240px] bg-zinc-600 rounded-full"></div>
      </div>
    </div>
  );
}
