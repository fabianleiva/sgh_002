import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SGH-Chicureo-12.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/Los-Lirios-HQ-6.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SOBRE_LAS_ROCAS_Casa-Lipulli-38.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/Namoncahue-17.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/MDZ-Web-2.webp",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const touchStartY = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (deltaY > 50) {
      navigate("/projects/selected");
    }
    touchStartY.current = null;
  };

  return (
    <div
      className="w-full h-screen overflow-hidden flex items-center justify-center relative transition-opacity duration-[1200ms] ease-in"
      style={{ opacity: visible ? 1 : 0, cursor: "pointer" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={() => navigate("/projects/selected")}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${src})`,
          }}
        />
      ))}

      {/* Indicador de swipe — solo mobile */}
      <div className="absolute bottom-8 w-full flex flex-col items-center gap-1 lg:hidden z-10">
        <div className="w-[2px] h-8 bg-[#e6e6e6] animate-bounce" />
        <span className="text-[#e6e6e6] text-xs tracking-widest uppercase">Proyectos</span>
      </div>
    </div>
  );
};

export default Landing;
