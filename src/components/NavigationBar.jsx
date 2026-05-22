import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [projectsState, setProjectsState] = useState("inactive");
  const [officeState, setOfficeState] = useState("inactive");
  const [contactState, setContactState] = useState("inactive");
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  // Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuSection, setMenuSection] = useState(null);

  useEffect(() => {
    setProjectsState(pathname.startsWith("/projects") ? "active" : "inactive");
    setOfficeState(pathname === "/office" ? "active" : "inactive");
    setContactState(pathname === "/contact" ? "active" : "inactive");
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-[100] p-3 w-full bg-[#fafafa] tracking-wider">

          {/* Menu Desktop */}
          <div
            id="navbar_desktop"
            className="hidden lg:grid grid-cols-[2fr_1fr_2fr] gap-5 items-start text-left"
          >
            {/* Columna 1: Links */}
            <div className="flex uppercase">

              {/* Proyectos con hover dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
              >
                <NavLink className={projectsState} to="/projects/selected">
                  <h3 className="hover:text-[#242424] mr-2">Proyectos,</h3>
                </NavLink>
                {isProjectsHovered && (
                  <div className="absolute top-full left-0 flex flex-col uppercase bg-[#fafafa] pt-1">
                    <NavLink
                      className="inactive hover:text-[#242424]"
                      to="/projects/selected"
                    >
                      <h3 className="mr-2 mb-1">Destacados,</h3>
                    </NavLink>
                    <NavLink
                      className="inactive hover:text-[#242424]"
                      to="/projects/all"
                    >
                      <h3>Archivo</h3>
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink className={officeState} to="/office">
                <h3 className="hover:text-[#242424] mr-2">Oficina,</h3>
              </NavLink>

              <NavLink className={contactState} to="/contact">
                <h3 className="hover:text-[#242424]">Contacto</h3>
              </NavLink>
            </div>

            {/* Columna 2: Vacía */}
            <div></div>

            {/* Columna 3: Nombre */}
            <div className="flex justify-end">
              <NavLink className="no-underline flex" to="/">
                <h3 className="text-base uppercase hover:text-[#adadad]">
                  Schwember Garcia-Huidobro Arquitectos
                </h3>
              </NavLink>
            </div>
          </div>

          {/* Menu Mobile */}
          <div id="navbar_mobile" className="lg:hidden flex justify-between">

            {/* Hamburguesa */}
            <div className="flex justify-start z-[400] relative">
              <button
                onClick={toggleMobileMenu}
                className="text-[#242424]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <IoCloseOutline className="text-2xl z-[300]" />
                ) : (
                  <HiOutlineBars2 className="text-2xl z-[300]" />
                )}
              </button>
            </div>

            {/* Nombre */}
            <div className="flex justify-end">
              <NavLink
                className="no-underline flex"
                to="/"
                onClick={() => {
                  if (isMobileMenuOpen) {
                    toggleMobileMenu();
                    setMenuSection(null);
                  }
                }}
              >
                <h3 className="uppercase z-[300]">
                  Schwember Garcia-Huidobro Arquitectos
                </h3>
              </NavLink>

              {isMobileMenuOpen && (
                <div className="absolute left-0 top-0 w-full bg-[#fafafa] z-[100]">
                  <div className="flex flex-col uppercase justify-center h-[100vh]">

                    {/* Menú principal */}
                    {!menuSection && (
                      <>
                        <NavLink
                          onClick={() => setMenuSection("projects")}
                          className="text-[#242424] p-3 text-4xl"
                        >
                          Proyectos
                        </NavLink>
                        <NavLink
                          to="/office"
                          onClick={() => { toggleMobileMenu(); setMenuSection(null); }}
                          className="text-[#242424] p-3 text-4xl"
                        >
                          Oficina
                        </NavLink>
                        <NavLink
                          to="/contact"
                          onClick={() => { toggleMobileMenu(); setMenuSection(null); }}
                          className="text-[#242424] p-3 text-4xl"
                        >
                          Contacto
                        </NavLink>
                      </>
                    )}

                    {/* Submenú Proyectos */}
                    {menuSection === "projects" && (
                      <>
                        <NavLink
                          to="/projects/selected"
                          className="text-[#242424] p-3 text-4xl"
                          onClick={() => { setMenuSection(null); toggleMobileMenu(); }}
                        >
                          Destacados
                        </NavLink>
                        <NavLink
                          to="/projects/all"
                          className="text-[#242424] p-3 text-4xl"
                          onClick={() => { setMenuSection(null); toggleMobileMenu(); }}
                        >
                          Archivo
                        </NavLink>
                      </>
                    )}

                  </div>
                </div>
              )}
            </div>
          </div>

        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
