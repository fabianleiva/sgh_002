import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const NavigationBar = () => {
  const { pathname } = useLocation();

  const [projectsState, setProjectsState] = useState("inactive");
  const [featuredProjectState, setFeaturedProjectState] = useState("inactive");
  const [allProjectState, setAllProjectState] = useState("inactive");
  const [mediaState, setMediaState] = useState("inactive");
  const [newsState, setNewsState] = useState("inactive");
  const [publicationsState, setPublicationsState] = useState("inactive");
  const [conferencesState, setConferencesState] = useState("inactive");
  const [officeState, setOfficeState] = useState("inactive");
  const [contactState, setContactState] = useState("inactive");

  // Setea todos los estados del menú según el pathname
  useEffect(() => {
    if (pathname === "/") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (
      pathname === "/projects/selected" ||
      pathname.startsWith("/projects/selected")
    ) {
      setProjectsState("active");
      setFeaturedProjectState("active");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/projects/all") {
      setProjectsState("active");
      setFeaturedProjectState("inactive");
      setAllProjectState("active");
      setMediaState("inactive");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/news") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("active");
      setPublicationsState("inactive");
      setConferencesState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/publications") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("inactive");
      setPublicationsState("active");
      setConferencesState("inactive");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/media/conferences") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("active");
      setNewsState("inactive");
      setPublicationsState("inactive");
      setConferencesState("active");
      setOfficeState("inactive");
      setContactState("inactive");
    }
    if (pathname === "/office") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setOfficeState("active");
      setContactState("inactive");
    }
    if (pathname === "/contact") {
      setProjectsState("inactive");
      setFeaturedProjectState("inactive");
      setAllProjectState("inactive");
      setMediaState("inactive");
      setOfficeState("inactive");
      setContactState("active");
    }
  }, [pathname]);

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showProjectsSecondLine = pathname.startsWith("/projects");

  // Determina si la segunda línea de la barra de navegación debe mostrarse o no en proyectos
  const showMediaSecondLine = pathname.startsWith("/media");

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [menuSection, setMenuSection] = useState(null); // Para controlar qué submenú mostrar

  const toggleMenuSection = (section) => {
    setMenuSection(section);
  };

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 z-[100] p-3 w-full bg-[#fafafa] tracking-wider">
          {/*Menu Desktop */}
          <div
            id="navbar_desktop"
            className="hidden lg:grid grid-cols-[2fr_1fr_2fr] gap-5 items-start text-left"
          >
            {/* Columna 1: Menú del sitio (2fr) */}
            <div>
              <div className="flex uppercase">
                {/* Columna 1: Menú (Primera línea) */}
                <div className="flex">
                  <NavLink className={projectsState} to="/projects/selected">
                    <h3 className=" hover:text-[#242424] mr-2">Proyectos,</h3>
                  </NavLink>
                  <NavLink className={mediaState} to="/media/news">
                    <h3 className=" hover:text-[#242424] mr-2">Medios,</h3>
                  </NavLink>
                  <NavLink className={officeState} to="/office">
                    <h3 className=" hover:text-[#242424] mr-2">Oficina,</h3>
                  </NavLink>
                </div>
                <div className="flex">
                  <NavLink className={contactState} to="/contact">
                    <h3 className=" hover:text-[#242424]">Contacto</h3>
                  </NavLink>
                </div>
              </div>

              {/* Columna 2: Menú (Segunda línea) */}
              <div className="flex">
                {showProjectsSecondLine && (
                  <>
                    <NavLink
                      className={featuredProjectState}
                      to="/projects/selected"
                    >
                      <h3 className=" hover:text-[#242424] mr-2">
                        Destacados,
                      </h3>
                    </NavLink>
                    <NavLink className={allProjectState} to="/projects/all">
                      <h3 className=" hover:text-[#242424] mr-2">Archivo</h3>
                    </NavLink>
                  </>
                )}

                {showMediaSecondLine && (
                  <>
                    <NavLink className={newsState} to="/media/news">
                      <h3 className=" hover:text-[#242424] mr-2">Noticias,</h3>
                    </NavLink>
                    <NavLink
                      className={publicationsState}
                      to="/media/publications"
                    >
                      <h3 className=" hover:text-[#242424] mr-2">
                        Publicaciones,
                      </h3>
                    </NavLink>
                    <NavLink
                      className={conferencesState}
                      to="/media/conferences"
                    >
                      <h3 className=" hover:text-[#242424] mr-8">
                        Conferencias
                      </h3>
                    </NavLink>
                  </>
                )}
              </div>
            </div>

            {/* Columna 2: Vacía (1fr) */}
            <div></div>

            {/* Columna 3: Menú y contacto (2fr) */}
            <div className="flex justify-end">
              <NavLink className="no-underline flex" to="/">
                <h3 className="text-base uppercase hover:text-[#adadad]">
                  Schwember Garcia-Huidobro Arquitectos
                </h3>
              </NavLink>
            </div>
          </div>

          {/*Menu Mobile */}
          <div
            id="navbar_mobile"
            className="lg:hidden flex justify-between"
          >
            {/* Menú hamburguesa */}
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
            {/* Nombre del sitio */}
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
                  {/* Menú desplegable */}
                  <div className="flex flex-col uppercase justify-center h-[100vh]">
                    <NavLink to="/projects/selected">
                      <h3 className="text-[#242424] hover:text-[#adadad] p-3 text-4xl">Proyectos</h3>
                    </NavLink>

                    <NavLink to="/media/news">
                      <h3 className="text-[#242424] hover:text-[#adadad] p-3 text-4xl">Medios</h3>
                    </NavLink>

                    <NavLink to="/office">
                      <h3 className="text-[#242424] hover:text-[#adadad] p-3 text-4xl">Oficina</h3>
                    </NavLink>
                    <NavLink to="/contact">
                      <h3 className="text-[#242424] hover:text-[#adadad] p-3 text-4xl">Contacto</h3>
                    </NavLink>
                  </div>
                  {isMobileMenuOpen && (
                    <div className="absolute left-0 top-0 w-full bg-[#fafafa] z-[100]">
                      {/* Menú desplegable */}
                      <div className="flex flex-col uppercase justify-center h-[100vh]">
                        {/* Menú Principal */}
                        {!menuSection && (
                          <>
                            <NavLink
                              onClick={() => toggleMenuSection("projects")}
                              className="text-[#242424] p-3 text-4xl"
                            >
                              Proyectos
                            </NavLink>
                            <NavLink
                              onClick={() => toggleMenuSection("media")}
                              className="text-[#242424] p-3 text-4xl"
                            >
                              Medios
                            </NavLink>
                            <NavLink
                              to="/office"
                              onClick={() => toggleMobileMenu()}
                              className="text-[#242424] p-3 text-4xl"
                            >
                              Oficina
                            </NavLink>
                            <NavLink
                              to="/contact"
                              onClick={() => toggleMobileMenu()}
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
                              onClick={() => {
                                setMenuSection(null);
                                toggleMobileMenu();
                              }}
                            >
                              Destacados
                            </NavLink>
                            <NavLink
                              to="/projects/all"
                              className="text-[#242424] p-3 text-4xl"
                              onClick={() => {
                                setMenuSection(null);
                                toggleMobileMenu();
                              }}
                            >
                              Archivo
                            </NavLink>
                          </>
                        )}

                        {/* Submenú Medios */}
                        {menuSection === "media" && (
                          <>
                            <NavLink
                              to="/media/news"
                              className="text-[#242424] p-3 text-4xl"
                              onClick={() => {
                                setMenuSection(null);
                                toggleMobileMenu();
                              }}
                            >
                              Noticias
                            </NavLink>
                            <NavLink
                              to="/media/publications"
                              className="text-[#242424] p-3 text-4xl"
                              onClick={() => {
                                setMenuSection(null);
                                toggleMobileMenu();
                              }}
                            >
                              Publicaciones
                            </NavLink>
                            <NavLink
                              to="/media/conferences"
                              className="text-[#242424] p-3 text-4xl"
                              onClick={() => {
                                setMenuSection(null);
                                toggleMobileMenu();
                              }}
                            >
                              Conferencias
                            </NavLink>
                          </>
                        )}
                      </div>
                    </div>
                  )}
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
