import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);
  const [hoveredImage, setHoveredImage] = useState(null);

  const renderProjects = (projectId) => {
    const index = projects.findIndex((e) => e.acf.project_id === projectId);
    if (index !== -1) {
      const project = projects[index];
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
              <span className="hidden md:block">
                {project.acf.project_title}
              </span>
            </div>
            <img
              className="w-full h-auto z-0"
              src={project.acf.cover}
              alt={project.slug}
              loading="lazy"
            />
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-col tracking-wider">
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("25")}
        {renderProjects("24")}
        {renderProjects("23")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("22")}
        {renderProjects("21")}
        {renderProjects("20")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("19")}
        {renderProjects("18")}
        {renderProjects("17")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("16")}
        {renderProjects("15")}
        {renderProjects("14")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("13")}
        {renderProjects("12")}
        {renderProjects("11")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("10")}
        {renderProjects("09")}
        {renderProjects("08")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("07")}
        {renderProjects("06")}
        {renderProjects("05")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("04")}
        {renderProjects("03")}
        {renderProjects("02")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("01")}
      </div>
    </section>
  );
};

export default FeaturedGallery;
