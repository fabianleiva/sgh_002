import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const AllProjectsList = ({ onHoverProject, activeProject, onProjectClick }) => {
  const { projects } = useContext(ApiContext);

  const isValidField = (value) =>
    value && value.trim() !== "" && value.trim() !== "-";

  const visibleProjects = projects
    .filter((p) => isValidField(p.acf.project_title))
    .sort((a, b) => (parseInt(b.acf.year) || 0) - (parseInt(a.acf.year) || 0));

  return (
    <div className="mb-32 mt-2">
      {visibleProjects.map((p) => {
        const isActive = activeProject?.id === p.id;
        const textClass = isActive
          ? "text-[#242424] font-bold"
          : "text-[#adadad] font-light";
        const isDestacado = p.acf.project_filter === "destacado";

        return (
          <div
            key={p.id}
            onMouseEnter={() => onHoverProject(p)}
            onMouseLeave={() => onHoverProject(null)}
            onClick={() => onProjectClick(p)}
            className="grid grid-cols-3 cursor-pointer"
          >
            <p className={`col-span-2 lg:col-span-1 text-left py-2 uppercase ${textClass}`}>
              {p.acf.project_title}
            </p>
            <p className={`text-left hidden lg:block py-2 uppercase ${textClass}`}>
              {p.acf.location}
            </p>
            <div className="lg:grid lg:grid-cols-3 flex justify-end">
              <p className={`text-left hidden lg:block py-2 uppercase ${textClass}`}>
                {p.acf.surface}
              </p>
              <p className={`text-left hidden lg:block py-2 uppercase ${textClass}`}>
                {p.acf.category?.name}
              </p>
              <p className={`text-right py-2 uppercase ${textClass}`}>
                {p.acf.year}
              </p>
            </div>
            <hr className="col-span-3 h-[1px] bg-[#adadad] border-0 rounded" />
          </div>
        );
      })}
    </div>
  );
};

export default AllProjectsList;
