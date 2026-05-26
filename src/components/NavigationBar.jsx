import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuSection, setMenuSection] = useState(null);

  const onProjectsPage = pathname.startsWith("/projects");
  const showProjectsSub = isProjectsHovered;

  const isLanding = pathname === "/";

  const active   = isLanding ? "text-[#e6e6e6]" : "text-[#262523]";
  const inactive = isLanding ? "text-[#e6e6e6]" : "text-[#bebebe]";
  const hover    = isLanding ? "hover:text-[#b0b0b0]" : "hover:text-[#262523]";

  const projectsColor  = onProjectsPage          ? active : inactive;
  const officeColor    = pathname === "/office"   ? active : inactive;
  const contactColor   = pathname === "/contact"  ? active : inactive;
  const selectedColor  = pathname.startsWith("/projects/selected") ? active : inactive;
  const archiveColor   = pathname === "/projects/all"              ? active : inactive;

  return (
    <>
      <header>
        <nav className={`fixed top-0 left-0 z-[100] w-full px-[25px] pt-[25px] pb-[20px] text-left ${pathname === "/" ? "bg-transparent" : "bg-[#fafafa]"}`}>

          {/* ── Desktop ── */}
          {isLanding ? (
            /* Layout landing: nombre + links apilados a la izquierda */
            <div className="hidden lg:flex flex-col items-start">
              <NavLink to="/" className="no-underline flex flex-col leading-tight text-left mb-4">
                <span className="font-semibold text-[20px] tracking-[1px] uppercase text-[#e6e6e6]">SCHWEMBER</span>
                <span className="font-semibold text-[20px] tracking-[1px] uppercase text-[#e6e6e6]">GARCIA-HUIDOBRO</span>
                <span className="font-light text-[20px] tracking-[1px] uppercase text-[#e6e6e6]">ARQUITECTOS</span>
              </NavLink>
              <div className="absolute top-[20vh] left-[25px] flex flex-col gap-2">
                <NavLink to="/projects/selected" className={`${hover} font-semibold text-[18px] uppercase leading-tight text-[#e6e6e6]`}>
                  Proyectos
                </NavLink>
                <NavLink to="/office" className={`${hover} font-semibold text-[18px] uppercase leading-tight text-[#e6e6e6]`}>Oficina</NavLink>
                <NavLink to="/contact" className={`${hover} font-semibold text-[18px] uppercase leading-tight text-[#e6e6e6]`}>Contacto</NavLink>
              </div>
            </div>
          ) : (
            /* Layout normal: nombre izquierda, links derecha */
            <div className="hidden lg:grid lg:grid-cols-2 gap-3 items-start">

              {/* Nombre — izquierda */}
              <NavLink to="/" className="no-underline flex flex-col leading-tight text-left">
                <span className="font-semibold text-[20px] tracking-[1px] uppercase text-[#262523]">SCHWEMBER</span>
                <span className="font-semibold text-[20px] tracking-[1px] uppercase text-[#262523]">GARCIA-HUIDOBRO</span>
                <span className="font-light text-[20px] tracking-[1px] uppercase text-[#262523]">ARQUITECTOS</span>
              </NavLink>

              {/* Links — derecha */}
              <div className="flex justify-between items-start text-left">

                {/* Proyectos + submenú */}
                <div
                  className="flex flex-col"
                  onMouseEnter={() => setIsProjectsHovered(true)}
                  onMouseLeave={() => setIsProjectsHovered(false)}
                >
                  <NavLink
                    to="/projects/selected"
                    className={`${projectsColor} ${hover} font-semibold text-[18px] uppercase leading-tight`}
                  >
                    Proyectos
                  </NavLink>
                  {showProjectsSub && (
                    <div className="flex flex-col gap-2 mt-2">
                      <NavLink
                        to="/projects/selected"
                        className={`${selectedColor} ${hover} font-semibold text-[14px] uppercase leading-snug`}
                      >
                        Destacados
                      </NavLink>
                      <NavLink
                        to="/projects/all"
                        className={`${archiveColor} ${hover} font-semibold text-[14px] uppercase leading-snug`}
                      >
                        Archivo
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* Oficina */}
                <NavLink
                  to="/office"
                  className={`${officeColor} ${hover} font-semibold text-[18px] uppercase leading-tight`}
                >
                  Oficina
                </NavLink>

                {/* Contacto */}
                <NavLink
                  to="/contact"
                  className={`${contactColor} ${hover} font-semibold text-[18px] uppercase leading-tight`}
                >
                  Contacto
                </NavLink>
              </div>
            </div>
          )}

          {/* ── Mobile ── */}
          <div className="lg:hidden flex justify-between items-start">

            {/* Nombre */}
            <NavLink
              to="/"
              className="no-underline flex flex-col items-start leading-tight"
              onClick={() => { if (isMobileMenuOpen) { setIsMobileMenuOpen(false); setMenuSection(null); } }}
            >
              <span className={`font-semibold text-[14px] tracking-[1px] ${isLanding && !isMobileMenuOpen ? "text-[#e6e6e6]" : "text-[#262523]"} uppercase z-[300]`}>SCHWEMBER</span>
              <span className={`font-semibold text-[14px] tracking-[1px] ${isLanding && !isMobileMenuOpen ? "text-[#e6e6e6]" : "text-[#262523]"} uppercase z-[300]`}>GARCIA-HUIDOBRO</span>
              <span className={`font-light text-[14px] tracking-[1px] ${isLanding && !isMobileMenuOpen ? "text-[#e6e6e6]" : "text-[#262523]"} uppercase z-[300]`}>ARQUITECTOS</span>
            </NavLink>

            {/* Hamburguesa */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isLanding && !isMobileMenuOpen ? "text-[#e6e6e6]" : "text-[#262523]"} z-[400] relative`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <IoClose className="text-2xl" />
                : <HiBars2 className="text-2xl" />}
            </button>

            {/* Menú móvil desplegable */}
            {isMobileMenuOpen && (
              <div className="absolute left-0 top-0 w-full h-[100vh] bg-[#fafafa] z-[100] flex flex-col items-center uppercase justify-center px-[25px] text-center">
                {!menuSection && (
                  <>
                    <button
                      onClick={() => setMenuSection("projects")}
                      className="text-[#262523] py-3 text-4xl font-semibold uppercase"
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
