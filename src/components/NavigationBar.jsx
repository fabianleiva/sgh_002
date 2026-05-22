import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuSection, setMenuSection] = useState(null);

  const onProjectsPage = pathname.startsWith("/projects");
  const showProjectsSub = onProjectsPage || isProjectsHovered;

  const active = "text-[#262523]";
  const inactive = "text-[#bebebe]";

  const projectsColor  = onProjectsPage          ? active : inactive;
  const officeColor    = pathname === "/office"   ? active : inactive;
  const contactColor   = pathname === "/contact"  ? active : inactive;
  const selectedColor  = pathname.startsWith("/projects/selected") ? active : inactive;
  const archiveColor   = pathname === "/projects/all"              ? active : inactive;

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-[100] w-full bg-[#fafafa] px-[25px] pt-[25px] pb-[20px]">

          {/* ── Desktop ── */}
          <div className="hidden lg:flex items-start justify-between">

            {/* Nombre — izquierda */}
            <NavLink to="/" className="no-underline flex flex-col leading-tight">
              <span className="font-semibold text-[20px] tracking-[1px] text-[#262523] uppercase">
                SCHWEMBER<br />GARCIA-HUIDOBRO
              </span>
              <span className="font-light text-[20px] tracking-[1px] text-[#262523] uppercase">
                ARQUITECTOS
              </span>
            </NavLink>

            {/* Links — derecha */}
            <div className="flex gap-x-[18vw] items-start">

              {/* Proyectos + submenú */}
              <div
                className="flex flex-col"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
              >
                <NavLink
                  to="/projects/selected"
                  className={`${projectsColor} font-semibold text-[18px] uppercase hover:text-[#262523] leading-tight`}
                >
                  Proyectos
                </NavLink>
                {showProjectsSub && (
                  <>
                    <NavLink
                      to="/projects/selected"
                      className={`${selectedColor} font-semibold text-[14px] hover:text-[#262523] leading-snug`}
                    >
                      Destacados
                    </NavLink>
                    <NavLink
                      to="/projects/all"
                      className={`${archiveColor} font-semibold text-[14px] hover:text-[#262523] leading-snug`}
                    >
                      Archivo
                    </NavLink>
                  </>
                )}
              </div>

              {/* Oficina */}
              <NavLink
                to="/office"
                className={`${officeColor} font-semibold text-[18px] uppercase hover:text-[#262523] leading-tight`}
              >
                Oficina
              </NavLink>

              {/* Contacto */}
              <NavLink
                to="/contact"
                className={`${contactColor} font-semibold text-[18px] uppercase hover:text-[#262523] leading-tight`}
              >
                Contacto
              </NavLink>
            </div>
          </div>

          {/* ── Mobile ── */}
          <div className="lg:hidden flex justify-between items-start">

            {/* Hamburguesa */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#262523] z-[400] relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <IoCloseOutline className="text-2xl" />
                : <HiOutlineBars2 className="text-2xl" />}
            </button>

            {/* Nombre */}
            <NavLink
              to="/"
              className="no-underline flex flex-col items-end leading-tight"
              onClick={() => { if (isMobileMenuOpen) { setIsMobileMenuOpen(false); setMenuSection(null); } }}
            >
              <span className="font-semibold text-[14px] tracking-[1px] text-[#262523] uppercase z-[300]">
                SCHWEMBER GARCIA-HUIDOBRO
              </span>
              <span className="font-light text-[14px] tracking-[1px] text-[#262523] uppercase z-[300]">
                ARQUITECTOS
              </span>
            </NavLink>

            {/* Menú móvil desplegable */}
            {isMobileMenuOpen && (
              <div className="absolute left-0 top-0 w-full h-[100vh] bg-[#fafafa] z-[100] flex flex-col uppercase justify-center px-[25px]">
                {!menuSection && (
                  <>
                    <button
                      onClick={() => setMenuSection("projects")}
                      className="text-[#262523] py-3 text-4xl text-left font-semibold"
                    >
                      Proyectos
                    </button>
                    <NavLink
                      to="/office"
                      onClick={() => { setIsMobileMenuOpen(false); setMenuSection(null); }}
                      className="text-[#262523] py-3 text-4xl font-semibold"
                    >
                      Oficina
                    </NavLink>
                    <NavLink
                      to="/contact"
                      onClick={() => { setIsMobileMenuOpen(false); setMenuSection(null); }}
                      className="text-[#262523] py-3 text-4xl font-semibold"
                    >
                      Contacto
                    </NavLink>
                  </>
                )}
                {menuSection === "projects" && (
                  <>
                    <NavLink
                      to="/projects/selected"
                      className="text-[#262523] py-3 text-4xl font-semibold"
                      onClick={() => { setMenuSection(null); setIsMobileMenuOpen(false); }}
                    >
                      Destacados
                    </NavLink>
                    <NavLink
                      to="/projects/all"
                      className="text-[#262523] py-3 text-4xl font-semibold"
                      onClick={() => { setMenuSection(null); setIsMobileMenuOpen(false); }}
                    >
                      Archivo
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>

        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
