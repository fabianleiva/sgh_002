import { useState, useEffect } from "react";

const images = [
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SGH-Chicureo-12.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/Los-Lirios-HQ-6.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SOBRE_LAS_ROCAS_Casa-Lipulli-38.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/Namoncahue-17.webp",
  "https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/MDZ-Web-2.webp",
];

const Landing = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center relative">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Schwember Garcia-Huidobro Arquitectos"
          className="absolute w-full h-auto block transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default Landing;
