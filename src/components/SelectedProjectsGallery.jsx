import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";

const ALL_IDS = [
  "01","02","03","11","31","07","08","09",
  "05","13","12","21","10","14","06","15",
  "22","04","16","17","18","19","20","23","24","25",
];

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    if (!projects.length) return;

    // Recoge todas las URLs de portada que se van a mostrar
    const coverUrls = ALL_IDS
      .map((id) => projects.find((p) => p.acf.project_id === id))
      .filter((p) => p && p.acf.cover)
      .map((p) => p.acf.cover);

    if (!coverUrls.length) return;

    let loaded = 0;
    const total = coverUrls.length;

    coverUrls.forEach((url) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= total) setAllLoaded(true);
      };
      img.src = url;
    });
  }, [projects]);

  const renderProjects = (projectId) => {
    const project = projects.find((e) => e.acf.project_id === projectId);
    if (!project || !project.acf.cover) return null;
    const isHovered = hoveredImage === projectId;

    return (
      <div
        key={project.id}
        className="flex justify-center h-fit relative"
        onMouseEnter={() => setHoveredImage(projectId)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <Link
          className="flex bg-[#fafafa] text-[#fafafa] hover:text-[#242424]"
          to={`/projects/selected/${project.slug}`}
        >
          <div
            className="transition-all duration-300 ease-in-out absolute z-[-10]"
            style={{ top: isHovered ? "-1.7rem" : 0 }}
          >
            <span className="hidden md:block">{project.acf.project_title}</span>
          </div>
          <img
            className="w-full h-auto z-0"
            src={project.acf.cover}
            alt={project.slug}
          />
        </Link>
      </div>
    );
  };

  return (
    <section
      className="flex flex-col tracking-wider transition-opacity duration-700"
      style={{ opacity: allLoaded ? 1 : 0 }}
    >
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("01")}
        {renderProjects("02")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("03")}
        {renderProjects("11")}
        {renderProjects("31")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("07")}
        {renderProjects("08")}
        {renderProjects("09")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("05")}
        {renderProjects("13")}
        {renderProjects("12")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("21")}
        {renderProjects("10")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("14")}
        {renderProjects("06")}
        {renderProjects("15")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("22")}
        {renderProjects("04")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("16")}
        {renderProjects("17")}
        {renderProjects("18")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("19")}
        {renderProjects("20")}
        {renderProjects("23")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("24")}
        {renderProjects("25")}
      </div>
    </section>
  );
};

export default FeaturedGallery;
