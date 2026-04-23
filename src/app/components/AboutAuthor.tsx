export default function AboutAuthor() {
  return (
    <section id="about" className="py-section-gap px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant mb-8 block">
          ACERCA DEL AUTOR
        </span>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: intro block */}
          <div>
            <h2 className="font-serif text-headline-xl italic mb-10 border-l-4 border-primary-container pl-8">
              Ligia Urroz
            </h2>
            <div className="space-y-6 max-w-prose">
              <p className="font-sans text-body-lg text-on-background leading-relaxed">
                Autora y promotora de la lectura. Nacida en Managua, Nicaragua,
                el 25 de noviembre de 1968. Nacionalidad mexicana y nicaragüense.
              </p>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                Su obra abarca novela, cuento, crónica y ensayo. Ha publicado en
                diversas antologias literarias mexicanas y colaborado con
                periódicos culturales. Guitarra rítmica de la banda de rock
                ochentera Octubre XX.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-primary/10 pt-10">
              <div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant mb-1">PUBLICACIONES</p>
                <p className="font-serif text-4xl text-on-surface">11+</p>
              </div>
              <div>
                <p className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant mb-1">PROYECTOS</p>
                <p className="font-serif text-4xl text-on-surface">50+</p>
              </div>
            </div>
          </div>

          {/* Right: detailed bio entries */}
          <div className="space-y-12">
            {[
              {
                label: "ESTUDIOS SUPERIORES",
                text: "Licenciada en economía por el ITAM. Master of Science in Industrial Relations por la London School of Economics. Máster en literatura en la era digital por la Universitat de Barcelona. Máster en literatura por la Universidad Anáhuac. Especialización en literatura comparada por la Universitat de Barcelona. Egresada de Laboratoriodenovela.",
              },
              {
                label: "ACTIVIDADES PROFESIONALES",
                text: "Colaboró en las antologías \u201cOnce mujeres que cuentan erotismo\u201d, \u201cMujeres de miedo que cuentan\u201d y \u201cMujeres que cuentan secretos\u201d. Su novela \u201cLa Muralla\u201d fue publicada en 2009 (3 ediciones) y en 2017 en edición bilingüe. En 2021 publicó \u201cSomoza\u201d bajo el sello Planeta, reimpresa a los seis meses.",
              },
              {
                label: "RECONOCIMIENTOS",
                text: "Su novela La Muralla fue preseleccionada en 2010 entre 6,779 títulos para el acervo de Bibliotecas Escolares y de Aulas de las escuelas públicas de educación básica de la SEP, para tercero de secundaria bajo \u201cNarrativa Contemporánea\u201d.",
              },
              {
                label: "OTRAS ACTIVIDADES",
                text: "Consejera de Share, MIPI y Embajadora de Juconi. Promotora de la lectura, guitarra rítmica de la banda de rock ochentera Octubre XX.",
              },
            ].map(({ label, text }) => (
              <div key={label} className="border-b border-outline-variant pb-10 last:border-0">
                <p className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant mb-3">
                  {label}
                </p>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
