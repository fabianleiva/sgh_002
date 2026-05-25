import { useState, useEffect } from "react";

const FadeIn = ({ children, className = "" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`transition-opacity duration-[800ms] ease-in ${className}`}
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
