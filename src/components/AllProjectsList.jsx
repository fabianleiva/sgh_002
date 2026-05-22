import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { useNavigate } from "react-router-dom";

const AllProjectsList = () => {
  const { projects } = useContext(ApiContext);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [openProjects, setOpenProjects] = useState([]);
  const [animatingProjects, setAnimatingProjects] = useState({});

  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    if (openProjects.includes(projectId)) {
      setAnimatingProjects((prev) => ({
        ...prev,
        [projectId]: "collapse-enter",
      }));
      setTimeout(() => {
        setOpenProjects(openProjects.filter((id) => id !== projectId));
        setAnimatingProjects((prev) => {
          // eslint-disable-next-line no-unused-vars
          const { [projectId]: _, ...rest } = prev;
          return rest;
        });
      }, 1000);
    } else {
      setOpenProjects([...openProjects, projectId]);
      setAnimatingProjects((prev) => ({
        ...prev,
        [projectId]: "expand-enter",
      }));
    }
  };

  const isValidField = (value) =>
    value && value.trim() !== "" && value.trim() !== "-";

  const visibleProjects = projects.filter((p) =>
    isValidField(p.acf.project_title)
  );

  return (
    <section className="mx-3 mt-12">
      <div className="mb-32">
        <div className="h-6"></div>
        {visibleProjects.map((p) => (
          <div
            onMouseEnter={() => setHoveredProjectId(p.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
            onClick={() => handleProjectClick(p.id)}
            key={p.id}
            className={`grid grid-cols-3 cursor-pointer transition-colors duration-300 ${
              hoveredProjectId === p.id || openProjects.includes(p.id)
                ? "font-[supreme-book] text-[#242424]"
                : "font-[supreme-book] text-[#adadad]"
            }`}
          >
            <p className="col-span-2 lg:col-span-1 text-left py-1">
              {p.acf.project_title}
            </p>
            <p className="text-left hidden lg:block py-1">{p.acf.location}</p>

            <div className="lg:grid lg:grid-cols-3 flex justify-end">
              <p className="text-left hidden lg:block py-1">{p.acf.surface}</p>
              <p className="text-left hidden lg:block py-1">
                {p.acf.category.name}
              </p>
              <p className="text-right py-1">{p.acf.year}</p>
            </div>

            <div
              className={`col-span-3 flex justify-end overflow-hidden ${
                animatingProjects[p.id] || ""
              }`}
            >
              {openProjects.includes(p.id) && (
                <div className="flex flex-col lg:flex-row justify-between w-full font-[supreme-book]">
                  <div className="flex flex-col text-left py-6 h-full min-w-[30vw] lg:max-w-[30vw] mr-6 justify-between">
                    <div>
                      {isValidField(p.acf.architects) && (
                        <p>Arquitectura: {p.acf.architects}</p>
                      )}
                      {isValidField(p.acf.lead_architects) && (
                        <p>Arquitectos a cargo: {p.acf.lead_architects}</p>
                      )}
                      {isValidField(p.acf.associate_architect) && (
                        <p>
                          Arquitectos asociados: {p.acf.associate_architect}
                        </p>
                      )}
                      {isValidField(p.acf.team) && <p>Equipo: {p.acf.team}</p>}
                      {isValidField(p.acf.location) && (
                        <p>Ubicación: {p.acf.location}</p>
                      )}
                      {isValidField(p.acf.year) && <p>Año: {p.acf.year}</p>}
                      {isValidField(p.acf.surface) && (
                        <p>Superficie: {p.acf.surface}</p>
                      )}
                      {isValidField(p.acf.client) && (
                        <p>Cliente: {p.acf.client}</p>
                      )}
                    </div>

                    <div className="hidden lg:block">
                      {p.acf.project_filter === "destacado" && (
                        <button
                          className="text-[#adadad] hover:text-[#242424] text-left"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/selected/${p.slug}`);
                          }}
                        >
                          {">> Ir al proyecto"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="lg:hidden">
                      {p.acf.project_filter === "destacado" && (
                        <button
                          className="text-[#adadad] hover:text-[#242424] py-6 text-left"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/selected/${p.slug}`);
                          }}
                        >
                          {">> Ir al proyecto"}
                        </button>
                      )}
                    </div>
                    {p.acf.cover && (
                      <img
                        src={p.acf.cover}
                        alt={p.acf.project_title}
                        className="py-6 max-w-[50vw] max-h-[30vh] lg:max-h-[50vh]"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            <hr className="col-span-3 h-[1px] bg-[#adadad] border-0 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsList;
