export default function DetailCard({ value, title, icon }: any) {
  return (
    <div className="w-full h-full max-h-[180px] bg-zinc-600 rounded ring-1 ring-zinc-400 transition-all hover:shadow-lg hover:shadow-cyan-400/50 hover:ring-cyan-400">
      <div className="p-5">
        <div className="w-full max-w-[50px] mb-2">{icon}</div>
        <p className="text-zinc-300 text-lg mb-2">{title}</p>
        <p className="text-cyan-400 text-xl">{value}</p>
      </div>
    </div>
  );
}
