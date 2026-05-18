const Office = () => {
  return (
    <main className="mt-[20vh] px-3 tracking-wider">
      {/* Office info */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="flex uppercase text-left "></div>
        <div className="grid grid-cols-1 gap-3 lg:col-span-3">
          <p className="text-left font-[supreme-book]">
            Schwember Garcia-Huidobro Arquitectos es una oficina de arquitectura ubicada en
            Santiago de Chile formada el año 2010. Ha desarrollando diversos
            proyectos públicos y privados tanto en Chile como en el extranjero.
            Su trabajo ha sido reconocido con los premios Design Vanguard 2017
            de Architectural Record, y el Design Award 2013, 2018 y 2020 de
            Wallpaper Magazine. Ha ganado diversos concursos públicos, entre
            ellos el diseño para el Museo Regional de Atacama (Copiapó), los
            Centros de Visitantes para el Parque Nacional Laguna San Rafael, la
            Reserva Jeinimeni (Aysén), y la Biblioteca, archivo y depósito
            Regional de Los Ríos (Valdivia). Sus proyectos han sido publicados
            en distintos medios internacionales, entre ellos: A+U (Japón), GA
            (Japón), Mark (Holanda), Wallpaper (Inglaterra), Architectural
            Record (EEUU), PLOT (Argentina), 2G (España), Baumeister (Alemania),
            Interni (Italia), y ha sido motivo de la edición de dos
            publicaciones monográficas: &quot;Schwember Garcia-Huidobro Arquitectos, Pista de
            Despegue&quot;, de Editorial Constructo, Chile, 2015, y &quot;Max
            Núñez Arquitectos, Colección de Ideas&quot;, de Editorial ARQ,
            Chile, 2018.
          </p>
        </div>
      </section>
      {/* Recognitions */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-20">
        <div></div>
        <div className="col-span-3">
          <div className="uppercase text-left col-span-1 mb-3">
            Reconocimientos
          </div>
          <div className="flex flex-col space-y-1 justify-start text-left font-[supreme-book]">
            <p>
              2024 - Mies Crown Hall Americas Prize, Outstanding Project / Hogar
              Aleman
            </p>
            <p>2023 - Archdaily Award Building of the year / Casa de Vidrio</p>
            <p>
              2022 - Mies Crown Hall Americas Prize, Nominación / Casa de Vidrio
            </p>
            <p>
              2018 - Wallpaper Magazine Award, Best New Private House / Casa
              Ghat
            </p>
            <p>
              2017 - Mies Crown Hall Americas Prize 2017, Nominación / Casa Ghat
            </p>
            <p>
              2017 - Architectural Record Magazine, Design Vanguard Award / Max
              Nunez
            </p>
            <p>
              2015 - Mies Crown Hall Americas Prize, Nominación / MAD Building
            </p>
            <p>
              2013 - Wallpaper Magazine Award, Best New Private House / Casa
              10x10
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </section>

      {/* Team */}
      <section className="mb-20">
        {/* Max Nunez */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <div className="flex uppercase text-left"></div>
          <div className="flex flex-col text-left lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 h-fit-content">
              {/* MAX NUNEZ */}
              <div className="col-span-3 flex flex-col justify-between">
                <div>
                  <p className="uppercase">Socio Fundador</p>{" "}
                  <p className="mb-3 uppercase">Max Nunez Bancalari</p>
                  <p className="font-[supreme-book]">
                    Arquitecto y Magister en Arquitectura de la Universidad
                    Católica de Chile en el 2004. El Año 2010 obtuvo un MSc in
                    Advanced Architectural Design de la Universidad de Columbia,
                    Nueva York, donde recibió el Lucille Smyser Lowenfish
                    Memorial Prize y el William Ware Prize for Excellence in
                    Design. Entre el 2005 y el 2010 trabajó asociado a Nicolás
                    del Río en dRN Arquitectos, y desde el 2010 dirige Max Núñez
                    Arquitectos. Ha sido invitado a presentar su trabajo en
                    diversas bienales y universidades de Chile, América y
                    Europa. En paralelo a su trabajo profesional, entre los años
                    2016 y 2020, fue Jefe de Programa del Magíster en
                    Arquitectura de la Universidad Católica, donde es profesor
                    de Taller de manera regular. Los años 2018 y 2019 fue
                    profesor invitado a la Universidad IUAV de Venecia, Italia.
                  </p>
                </div>
                <div className="mt-6">
                  <img
                    className="w-full md:w-1/2"
                    src="/maxnunez.webp"
                    alt="maxnunez"
                  />
                </div>
              </div>
              <div></div>

              {/* STEFANO ROLLA */}
              <div className="col-span-3 flex flex-col justify-between mt-20">
                <div>
                  <p className="uppercase">Socio</p>{" "}
                  <p className="mb-3 uppercase">Stefano Rolla</p>
                  <p className="font-[supreme-book]">
                    Se graduó de Arquitecto en el Politécnico de Milán en el
                    2005, con una tesis desarrollada en conjunto con la
                    Universidad de Buenos Aires. Desde el año 2006 vive y
                    trabaja en Chile, de forma independiente y colaborando con
                    varias oficinas de Arquitectura, entre otras Guillermo Acuña
                    Arquitectos Asociados y Schwember Garcia-Huidobro Arquitectos. Actualmente
                    es profesor de Taller IV de la Universidad San Sebastián y
                    ha sido profesor de Teoría, Historia y Crítica de la
                    Arquitectura en la Universidad Católica de Chile. Desde 2018
                    es socio de Schwember Garcia-Huidobro Arquitectos.
                  </p>
                </div>
                <div className="mt-6">
                  <img
                    className="w-full md:w-1/2"
                    src="/stefanorolla.webp"
                    alt="stefanorolla"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="flex w-full justify-start col-span-1">
          <p className="uppercase"></p>
        </div>
        <div className="grid grid-cols-1 gap-3 mb-40 lg:col-span-4">
          <div className="flex flex-col text-left col-span-2 lg:col-span-1">
            <p className="col-span-1 uppercase mb-1">Jefes de Proyecto</p>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Carlos Rosas </p>
              <p>/ Arquitecto Universidad Diego Portales</p>
            </div>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Fabián Leiva</p>
              <p>/ Arquitecto Universidad de Chile</p>
            </div>
          </div>
          <div className="flex flex-col text-left col-span-2 lg:col-span-1 mt-3">
            <p className="col-span-1 uppercase mb-1">Arquitectos</p>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Tomás Montero</p>
              <p>/ Arquitecto Universidad Diego Portales</p>
            </div>
          </div>
          <div className="flex flex-col text-left col-span-2 lg:col-span-1 mt-3">
            <p className="col-span-1 uppercase mb-1">Practicantes</p>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Emilia Henríquez</p>
              <p>/ Arquitecto Universidad de Chile</p>
            </div>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Ben Brinckmann</p>
              <p>/ Arquitecto Universidad de Mendrisio</p>
            </div>
          </div>
          <div className="flex flex-col text-left col-span-2 lg:col-span-1 mt-3">
            <p className="col-span-1 uppercase mb-1">Administración</p>
            <div className="flex flex-col md:flex-row font-[supreme-book] gap-1">
              <p className="uppercase">Isabel Muzzo</p>
              <p>/ Ingeniero Comercial Universidad de los Andes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <section className="flex col-span-3 lg:grid lg:grid-cols-5 mb-12 lg:mb-6 text-[#adadad] font-[supreme-book]">
        <div className="col-span-1 "></div>
        <div className="text-left col-span-4">
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
  );
};

export default Office;
