import { useParams, useNavigate } from "react-router";
import { useState, useEffect, useContext, useRef } from "react";
import { ApiContext } from "../context/ApiContext.jsx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";

const ProjectGallery = () => {
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const { projects } = useContext(ApiContext);
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const infoPanelRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find((e) => e.slug === projectSlug);
      if (foundProject) {
        setProject(foundProject);
        setCurrentImageIndex(0);
      }
    }

    // Cambia el estado a 'true' después de 500ms
    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [projects, projectSlug]);

  const handleNextImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }
  };

  const handlePrevImage = () => {
    if (project && project.acf.project_images) {
      const validImages = Object.values(project.acf.project_images).filter(
        (img) => img
      );
      const totalImages = validImages.length;
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
      );
    }
  };

  const handleNextProject = () => {
    if (projects.length > 0) {
      const filteredProjects = projects.filter(
        (p) => p.acf.project_filter === "destacado"
      );
      const currentIndex = filteredProjects.findIndex(
        (p) => p.slug === projectSlug
      );
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        const basePath = window.location.pathname.includes("/selected/")
          ? "/projects/selected/"
          : "/projects/";
        navigate(`${basePath}${filteredProjects[nextIndex].slug}`);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        infoPanelRef.current &&
        !infoPanelRef.current.contains(event.target)
      ) {
        setShowInfo(false);
      }
    };

    if (showInfo) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showInfo]);

  const projectDetails = project
    ? [
        { label: "Arquitectura", value: project.acf.architects },
        {
          label: "Arquitecto Asociado",
          value: project.acf.associate_architect,
        },
        { label: "Arquitectos a cargo", value: project.acf.lead_architects },
        { label: "Equipo", value: project.acf.team },
        { label: "Ubicación", value: project.acf.location },
        { label: "Año", value: project.acf.year },
        { label: "Superficie", value: project.acf.surface },
        { label: "Cliente", value: project.acf.client },
      ]
    : [];

  return (
    <main>
      <div
        id="desktop"
        className="w-screen h-[100dvh] flex flex-col justify-center items-center overflow-hidden relative hidden md:block"
      >
        {project && (
          <>
            <div className="absolute inset-0 flex">
              <div
                className="w-1/2 h-full relative group"
                onClick={handlePrevImage}
              >
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#242424] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowLeft />
                </span>
              </div>
              <div
                className="w-1/2 h-full relative group"
                onClick={handleNextImage}
              >
                <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#242424] text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <SlArrowRight />
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center w-full h-full pointer-events-none">
              <img
                className="h-[60vh] w-auto object-contain"
                src={
                  Object.values(project.acf.project_images).filter(
                    (img) => img
                  )[currentImageIndex]
                }
                alt={`Image ${currentImageIndex + 1}`}
                loading="lazy"
              />
            </div>

            <p
              onClick={(e) => {
                e.stopPropagation();
                setShowInfo((prev) => !prev);
              }}
              className={`absolute bottom-0 left-0 p-3 text-base z-10 uppercase flex items-center gap-1 ${
                showInfo
                  ? "text-[#fafafa] hover:text-[#adadad]"
                  : "text-[#adadad] hover:text-[#242424]"
              }`}
            >
              {showInfo ? (
                "Cerrar"
              ) : (
                <>
                  {project.acf.project_title}
                  <FaPlus className="inline-block text-md" />
                </>
              )}
            </p>

            <p
              onClick={handleNextProject}
              className={`flex absolute bottom-0 right-0 p-3 text-[#adadad] hover:text-[#242424] z-10 text-2xl group ${
                showInfo ? "hidden" : ""
              }`}
            >
              <RxDoubleArrowRight />
            </p>

            <div
              ref={infoPanelRef}
              className={`fixed bottom-0 left-0 w-full bg-[#242424] justify-between opacity-90 text-[#fafafa] flex flex-col md:grid md:grid-cols-2 md:gap-3 transform transition-transform duration-300 ease-in-out tracking-wider ${
                showInfo ? "translate-y-0" : "translate-y-full"
              }`}
              style={{ height: "80vh", zIndex: 9 }}
            >
              <div className="w-full text-sm 2xl:text-base p-3 text-left md:col-span-1 font-light">
                {project.acf.summary}
              </div>

              <div className="max-w-[45vw] lg:max-w-[35vw] xl:max-w-[25vw] ml-auto text-sm 2xl:text-base p-3 text-right md:col-span-1 font-light">
                {projectDetails
                  .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
                  .map(({ label, value }) => (
                    <p key={label}>
                      {label}: {value}
                    </p>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div
        id="mobile"
        className={`md:hidden mt-[20vh] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          {project &&
            Object.values(project.acf.project_images)
              .filter((img) => img)
              .map((img, index) => (
                <img
                  key={index}
                  className="w-full object-cover px-3 pb-3"
                  src={img}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
              ))}
        </div>
        <div className="w-full bg-[#242424] text-[#fafafa] p-3 text-left flex flex-col py-6">
          <h3 className="mb-3">{project?.acf.project_title}</h3>
          <p>{project?.acf.summary}</p>
          <div className="mt-6">
            {projectDetails
              .filter(({ value }) => value && value !== "-") // Filtra los valores "-" o vacíos
              .map(({ label, value }) => (
                <p key={label}>
                  {label}: {value}
                </p>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectGallery;
