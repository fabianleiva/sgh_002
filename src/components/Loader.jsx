import { useEffect, useState } from "react";

const Loader = ({ onDone }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => setFadeOut(true), 1500);
    const done = setTimeout(() => onDone(), 2100);
    return () => { clearTimeout(fade); clearTimeout(done); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#fafafa] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      {/* Nombre centrado */}
      <div className="flex flex-col items-center text-center tracking-[1px] uppercase text-[#262523]">
        <span className="font-semibold text-[20px] leading-tight">
          SCHWEMBER
        </span>
        <span className="font-semibold text-[20px] leading-tight">
          GARCIA-HUIDOBRO
        </span>
        <span className="font-light text-[20px] leading-tight">
          ARQUITECTOS
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="mt-8 w-[200px] h-[1px] bg-[#e0e0e0] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#262523]"
          style={{
            animation: "progress 1.5s ease-in-out forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
