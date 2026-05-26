import FadeIn from "../components/FadeIn.jsx";

const Office = () => {
  return (
    <FadeIn>
    <main className="mt-[20vh] px-[25px] tracking-wider">

      {/* ── Intro: descripción + socios + foto ── ocupa exactamente 100vh ── */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-20 lg:h-[calc(80vh-25px)]">

        {/* Descripción — cols 1-2 */}
        <div className="lg:col-span-2 flex flex-col justify-start">
          <p className="uppercase font-semibold text-[16px] mb-4 text-left">
            Oficina
          </p>
          <p className="font-light text-[16px] leading-relaxed text-left">
            Schwember García-Huidobro Arquitectos es una oficina de arquitectura
            con base en Santiago de Chile, dedicada al desarrollo de proyectos
            residenciales y encargos de distintas escalas.
            <br /><br />
            Su trabajo se caracteriza por una aproximación cuidadosa al lugar,
            la materialidad y la relación entre arquitectura y paisaje,
            buscando soluciones precisas, sobrias y duraderas.
            <br /><br />
            A través de una práctica fundada en el diseño, la construcción y la
            comprensión del contexto, la oficina desarrolla obras que responden
            tanto a las necesidades de sus habitantes como a las condiciones
            específicas de cada emplazamiento.
          </p>
        </div>

        {/* Socios — col 3, desktop, empujado hacia abajo */}
        <div className="hidden lg:flex flex-col justify-end text-left">
          <p className="uppercase font-semibold text-[16px] mb-3">Socios</p>

          <p className="font-semibold text-[16px]">Álvaro Schwember</p>
          <p className="font-light text-[14px] mb-6">
            Arquitecto de la Pontificia Universidad Católica de Chile 2005.
            Master en City Regeneration de la Ecole Nationale Supérieure
            d'Architecture de Paris La Villette, Francia.
          </p>

          <p className="font-semibold text-[16px]">Fernando García-Huidobro</p>
          <p className="font-light text-[14px]">
            Arquitecto de la Pontificia Universidad Católica de Chile 2004.
            Premio Facultad de Arquitectura, Diseño y Estudios Urbanos PUC.
            Master of Science en diseño sustentable de la University College of
            London, UK.
          </p>
        </div>

        {/* Foto socios — col 4, llena el alto de la sección */}
        <div className="hidden lg:flex h-full">
          <img
            src="https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SGH-OFICINA2_WEB.webp"
            alt="Álvaro Schwember y Fernando García-Huidobro"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Socios — mobile (debajo de la descripción) */}
        <div className="lg:hidden mt-6 text-left">
          <p className="uppercase font-semibold mb-3">Socios</p>

          <p className="font-semibold">Álvaro Schwember</p>
          <p className="font-light text-sm mb-4">
            Arquitecto de la Pontificia Universidad Católica de Chile 2005.
            Master en City Regeneration de la Ecole Nationale Supérieure
            d'Architecture de Paris La Villette, Francia.
          </p>

          <p className="font-semibold">Fernando García-Huidobro</p>
          <p className="font-light text-sm">
            Arquitecto de la Pontificia Universidad Católica de Chile 2004.
            Premio Facultad de Arquitectura, Diseño y Estudios Urbanos PUC.
            Master of Science en diseño sustentable de la University College of
            London, UK.
          </p>

          {/* Foto socios — mobile */}
          <img
            src="https://api.sgharquitectos.cl/wp/wp-content/uploads/2026/05/SGH-OFICINA2_WEB.webp"
            alt="Álvaro Schwember y Fernando García-Huidobro"
            className="w-full h-auto mt-6"
          />
        </div>
      </section>

      {/* ── Equipo + Publicaciones / Premios ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-3 mb-20">

        {/* Col izquierda: Equipo + Premios */}
        <div className="flex flex-col gap-8">

          {/* Equipo */}
          <div className="flex flex-col gap-3 text-left">
            <p className="uppercase font-semibold text-[16px]">Equipo</p>
            <div>
              <p className="font-semibold text-[16px]">Sebastián Marín G.</p>
              <p className="font-light text-[14px]">
                Arquitecto Universidad del Desarrollo, Magister de Diseño y construcción sustentable UDD
              </p>
            </div>
          </div>

          {/* Premios */}
          <div className="text-left">
            <p className="uppercase font-semibold text-[16px] mb-3">Premios</p>
            <div className="flex flex-col gap-1 font-light text-[14px]">
              <p>2019 — German Design Award Special / Casa sobre las Rocas</p>
            </div>
          </div>

        </div>

        {/* Col derecha: Publicaciones */}
        <div className="text-left">
          <p className="uppercase font-semibold text-[16px] mb-3">Publicaciones</p>
          <div className="flex flex-col gap-1 font-light text-[14px]">
            <p>&quot;Wood Architecture Today&quot; — David Andreu, Booq Publishing, 2019</p>
            <a href="https://www.archdaily.cl/cl/892209/casa-sobre-las-rocas-schwember-garcia-huidobro-arquitectos" target="_blank" rel="noopener noreferrer" className="!text-[#242424] hover:!text-[#adadad] !no-underline !font-light">
              Casa sobre las Rocas — ArchDaily, 2018
            </a>
            <a href="https://www.archdaily.cl/cl/990132/casa-los-lirios-schwember-garcia-huidobro-arquitectos" target="_blank" rel="noopener noreferrer" className="!text-[#242424] hover:!text-[#adadad] !no-underline !font-light">
              Casa Los Lirios — ArchDaily, 2022
            </a>
            <a href="https://www.archdaily.cl/cl/998389/casa-muros-curvos-schwember-garcia-huidobro-arquitectos" target="_blank" rel="noopener noreferrer" className="!text-[#242424] hover:!text-[#adadad] !no-underline !font-light">
              Casa Muros Curvos — ArchDaily, 2023
            </a>
            <a href="https://www.archdaily.cl/cl/1020011/casa-pelvin-schwember-garcia-huidobro-arquitectos" target="_blank" rel="noopener noreferrer" className="!text-[#242424] hover:!text-[#adadad] !no-underline !font-light">
              Casa Pelvin — ArchDaily, 2024
            </a>
            <a href="https://www.archdaily.cl/cl/1025148/casa-namoncahue-schwember-garcia-huidobro-arquitectos" target="_blank" rel="noopener noreferrer" className="!text-[#242424] hover:!text-[#adadad] !no-underline !font-light">
              Casa Namoncahue — ArchDaily, 2024
            </a>
          </div>
        </div>

      </section>


      {/* ── Crédito web ── */}
      <section className="mb-12 text-left">
        <a
          href="https://www.instagram.com/fffvbo/"
          target="_blank"
          rel="noopener noreferrer"
          className="!text-[#adadad] hover:!text-[#adadad] !no-underline !font-light text-[14px] tracking-wider uppercase text-[11px]"
        >
          DEV_BY: FL
        </a>
      </section>

    </main>
    </FadeIn>
  );
};

export default Office;
