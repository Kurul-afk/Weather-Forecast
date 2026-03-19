function LoadingDetailCard() {
  return (
    <div className="w-full h-full min-h-[160px] max-h-[180px] bg-zinc-600 rounded ring-1 ring-zinc-500 animate-pulse">
      <div className="p-5">
        {/* Заглушка для иконки */}
        <div className="w-10 h-10 bg-zinc-500 rounded-lg mb-4"></div>

        {/* Заглушка для заголовка (Title) */}
        <div className="h-4 w-24 bg-zinc-500 rounded mb-3"></div>

        {/* Заглушка для значения (Value) */}
        <div className="h-6 w-16 bg-zinc-500 rounded"></div>
      </div>
    </div>
  );
}

export default function LoadingDetailList() {
  return (
    <div className="flex justify-between gap-5">
      {[1, 2, 3, 4].map(() => (
        <>
          <LoadingDetailCard />
        </>
      ))}
    </div>
  );
}
