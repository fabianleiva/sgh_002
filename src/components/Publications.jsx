import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";

const Publications = () => {
  const { publications } = useContext(ApiContext);
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
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-3 gap-y-12 md:gap-y-24">
        {publications.map((item) => (
          <div key={item.id} className="flex flex-col h-full">
            <div
              className="relative flex flex-col justify-center max-w-80vw bg-white shadow-md p-6 min-h-[40vh] lg:h-[40vh] 2xl:h-[45vh] cursor-pointer"
              onClick={() => setSelectedImage(item.acf.image)}
            >
              <img
                src={item.acf.image}
                alt={item.acf.publication_title}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
            <div className="flex flex-col mt-2 text-left flex-shrink-0">
              <div>
                <p>
                  {item.acf.source} / {item.acf.country}
                </p>
                <p className="text-[#adadad] font-light">{item.acf.publication_title}</p>
                <p className="text-[#adadad] font-light">{item.acf.publication_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar la imagen en grande */}
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

export default Publications;
