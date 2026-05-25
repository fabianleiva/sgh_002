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
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

          {/* Label */}
          <div className="lg:col-span-4 mb-1">
            <p className="uppercase font-semibold text-[16px] text-left">
              Equipo 2026
            </p>
          </div>

          {/* Jefes de Proyecto */}
          <div className="text-left">
            <p className="font-semibold text-[16px]">Carlos Rosas</p>
            <p className="font-light text-[14px]">
              Arquitecto Universidad Diego Portales
            </p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-[16px]">Fabián Leiva</p>
            <p className="font-light text-[14px]">
              Arquitecto Universidad de Chile
            </p>
          </div>

          {/* Arquitectos */}
          <div className="text-left">
            <p className="font-semibold text-[16px]">Tomás Montero</p>
            <p className="font-light text-[14px]">
              Arquitecto Universidad Diego Portales
            </p>
          </div>

          {/* Administración */}
          <div className="text-left">
            <p className="font-semibold text-[16px]">Isabel Muzzo</p>
            <p className="font-light text-[14px]">
              Ingeniero Comercial Universidad de los Andes
            </p>
          </div>

          {/* Practicantes */}
          <div className="text-left">
            <p className="font-semibold text-[16px]">Emilia Henríquez</p>
            <p className="font-light text-[14px]">
              Arquitecto Universidad de Chile
            </p>
          </div>
          <div className="text-left">
            <p className="font-semibold text-[16px]">Ben Brinckmann</p>
            <p className="font-light text-[14px]">
              Arquitecto Universidad de Mendrisio
            </p>
          </div>

        </div>
      </section>

      {/* ── Publicaciones + Premios ── */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-20">

        {/* Publicaciones — cols 1-2 */}
        <div className="lg:col-span-2 text-left">
          <p className="uppercase font-semibold text-[16px] mb-3">
            Publicaciones
          </p>
          <div className="flex flex-col gap-1 font-light text-[14px]">
            <p>
              &quot;Schwember Garcia-Huidobro Arquitectos, Pista de Despegue&quot;
              — Editorial Constructo, Chile, 2015
            </p>
            <p>
              &quot;Max Núñez Arquitectos, Colección de Ideas&quot;
              — Editorial ARQ, Chile, 2018
            </p>
          </div>
        </div>

        {/* Premios — cols 3-4 */}
        <div className="lg:col-span-2 text-left">
          <p className="uppercase font-semibold text-[16px] mb-3">Premios</p>
          <div className="flex flex-col gap-1 font-light text-[14px]">
            <p>2024 — Mies Crown Hall Americas Prize, Outstanding Project / Hogar Alemán</p>
            <p>2023 — Archdaily Award Building of the Year / Casa de Vidrio</p>
            <p>2022 — Mies Crown Hall Americas Prize, Nominación / Casa de Vidrio</p>
            <p>2020 — Wallpaper Magazine Design Award</p>
            <p>2018 — Wallpaper Magazine Award, Best New Private House / Casa Ghat</p>
            <p>2018 — Wallpaper Magazine Design Award</p>
            <p>2017 — Mies Crown Hall Americas Prize, Nominación / Casa Ghat</p>
            <p>2017 — Architectural Record Magazine, Design Vanguard Award</p>
            <p>2015 — Mies Crown Hall Americas Prize, Nominación / MAD Building</p>
            <p>2013 — Wallpaper Magazine Design Award</p>
            <p>2013 — Wallpaper Magazine Award, Best New Private House / Casa 10x10</p>
          </div>
        </div>
      </section>

      {/* ── Línea separadora ── */}
      <hr className="border-0 h-px bg-[#adadad] mb-6" />

      {/* ── Crédito web ── */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-3 mb-12 text-[#adadad] font-light text-[14px]">
        <div className="lg:col-span-2" />
        <div className="text-left lg:col-span-2">
          <a
            className="hover:text-[#242424]"
            href="https://www.instagram.com/fffvbo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollo web: Fabian Leiva
          </a>
        </div>
      </section>

    </main>
    </FadeIn>
  );
};

export default Office;
