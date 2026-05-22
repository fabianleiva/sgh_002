import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";

const News = () => {
  const { news } = useContext(ApiContext);
  const [selectedImage, setSelectedImage] = useState(null);

  // Cierra el modal al presionar "Esc"
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="mt-[20vh]  mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-12 2xl:gap-y-24">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col h-full">
            <div
              className="relative flex flex-col justify-center max-w-80vw bg-white shadow-md p-6 min-h-[40vh] lg:h-[40vh] 2xl:h-[45vh] cursor-pointer"
              onClick={() => setSelectedImage(item.acf.cover)}
            >
              <img
                src={item.acf.cover}
                alt={item.acf.title}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
            <div className="flex flex-col mt-2 text-left flex-shrink-0">
              <p className="uppercase">{item.acf.source}</p>
              <p className="text-[#adadad] font-light">{item.acf.title}</p>
              <p className="text-[#adadad] font-light">{item.acf.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-[100]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </main>
  );
};

export default News;
