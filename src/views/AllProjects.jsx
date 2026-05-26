import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";
import AllProjectsList from "../components/AllProjectsList.jsx";
import FadeIn from "../components/FadeIn.jsx";

const AllProjects = () => {
  const { projects } = useContext(ApiContext);
  const navigate = useNavigate();
  const [shownCover, setShownCover] = useState(null);
  const [shownProject, setShownProject] = useState(null);
  const [mobileOverlay, setMobileOverlay] = useState(null);

  const defaultProject = projects.find((p) =>
    p.acf.project_title?.toLowerCase().includes("muros")
  );

  useEffect(() => {
    if (defaultProject?.acf?.cover && !shownCover) {
      setShownCover(defaultProject.acf.cover);
    }
  }, [defaultProject]);

  const handleHover = (project) => {
    setHoveredProject(project);
    if (project?.acf?.cover) {
      setShownCover(project.acf.cover);
      setShownProject(project);
    }
  };

  // click: mobile → overlay, desktop → navegar si es destacado
  const handleProjectClick = (project) => {
    if (window.innerWidth < 1024) {
      setMobileOverlay(project);
    } else if (project?.acf?.project_filter === "destacado") {
      navigate(`/projects/selected/${project.slug}`);
    }
  };

  const [hoveredProject, setHoveredProject] = useState(null);

  const isDestacado = shownProject?.acf?.project_filter === "destacado";

  return (
    <FadeIn>
      <div className="fixed inset-0 flex pt-[20vh] bg-[#fafafa] z-[10]">

        {/* Panel izquierdo — lista (full en mobile, 2/3 en desktop) */}
        <div
          className="w-full lg:w-2/3 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden px-[25px]"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="sticky top-0 bg-[#fafafa] z-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 text-[#242424] uppercase text-base">
              <p className="text-left">Proyecto</p>
              <p className="text-left hidden lg:block">Lugar</p>
              <div className="flex justify-end lg:grid lg:grid-cols-3">
                <p className="text-left hidden lg:block">Superficie</p>
                <p className="text-left hidden lg:block">Tipología</p>
                <p className="text-right">Año</p>
              </div>
            </div>
            <hr className="h-[1px] bg-[#adadad] border-0 rounded" />
          </div>

          <AllProjectsList
            onHoverProject={handleHover}
            activeProject={shownProject}
            onProjectClick={handleProjectClick}
          />
        </div>

        {/* Panel derecho — imagen (solo desktop) */}
        <div className="hidden lg:flex w-1/3 h-full overflow-hidden flex-col p-8 pt-4">
          {shownCover && (
            <img src={shownCover} alt="" className="w-full h-auto" />
          )}
          <div className="flex-1 flex items-end justify-end">
            {isDestacado && (
              <span
                onClick={() => navigate(`/projects/selected/${shownProject.slug}`)}
                className="text-[#242424] hover:text-[#bebebe] font-semibold text-[18px] uppercase tracking-[1px] transition-colors duration-200 cursor-pointer"
              >
                VER PROYECTO &gt;&gt;
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Overlay imagen — solo mobile */}
      {mobileOverlay && (
        <div
          className="fixed inset-0 z-[200] bg-[#fafafa] flex flex-col items-center justify-center px-[25px]"
          onClick={() => setMobileOverlay(null)}
        >
          <img
            src={mobileOverlay.acf.cover}
            alt={mobileOverlay.acf.project_title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          <p className="mt-4 text-[#242424] font-semibold uppercase tracking-[1px] text-[16px] text-center">
            {mobileOverlay.acf.project_title}
          </p>
          {mobileOverlay.acf.project_filter === "destacado" && (
            <button
              className="mt-4 text-[#242424] hover:text-[#bebebe] font-semibold uppercase tracking-[1px] text-[16px]"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/projects/selected/${mobileOverlay.slug}`);
              }}
            >
              VER PROYECTO &gt;&gt;
            </button>
          )}
        </div>
      )}
    </FadeIn>
  );
};

export default AllProjects;
