import AnimatedSun from "../../ui/animatedSun";

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-tr from-zinc-900 to-zinc-800 transition-all duration-1000">
      <AnimatedSun />
    </div>
  );
}
