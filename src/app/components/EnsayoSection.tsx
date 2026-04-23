import Image from "next/image";

const essays = [
  {
    numeral: "I",
    title: "El Color Púrpura",
    author: "Alice Walker",
    subtitle: "La cultura femenina en la América negra",
    body: (
      <>
        Urroz examina la obra de Walker como testimonio de la experiencia
        colectiva de las mujeres afroamericanas en el sur de Estados Unidos.{" "}
        <em>El Color Púrpura</em> revela cómo la escritura — incluso la carta
        íntima — se convierte en acto de resistencia y autoafirmación ante el
        abuso y la invisibilidad. La voz de Celie es, para Urroz, la voz de
        todas las mujeres que encontraron en el lenguaje su primer espacio
        propio.
      </>
    ),
    imageSrc: "/image03.png",
    imageAlt: "Portada del ensayo — El Color Púrpura",
    quote:
      "Un recorrido a través de un análisis de obras realizadas por mujeres que lucharon por proyectar su visión del mundo.",
    quoteSource: "— Rolling Stone, Núm. 195, noviembre 2019",
  },
  {
    numeral: "II",
    title: "Persépolis",
    author: "Marjane Satrapi",
    subtitle: "Cuerpo, velo y libertad en el mundo islámico",
    body: (
      <>
        En su análisis de la novela gráfica de Satrapi, Urroz traza la
        manera en que el cuerpo femenino se convierte en campo de batalla
        política e ideológica. La Revolución Islámica de 1979 no es solo
        telón de fondo:{" "}
        <em>Persépolis</em> muestra cómo las restricciones externas moldean —
        y a la vez no logran borrar — la identidad de una mujer que se niega a
        ser definida por el régimen o por el exilio.
      </>
    ),
    imageSrc: "/image04.png",
    imageAlt: "Portada del ensayo — Persépolis",
    quote:
      "Urroz vincula la cultura femenina como experiencia colectiva que une a las escritoras a través del tiempo y el espacio.",
    quoteSource: "— Editorial Narratio, 2018",
  },
  {
    numeral: "III",
    title: "La Vida de Adèle",
    author: "Julie Maroh",
    subtitle: "Deseo, identidad y mirada en la Europa contemporánea",
    body: (
      <>
        A través de{" "}
        <em>El azul es un color cálido</em> de Julie Maroh — llevada al cine
        por Abdellatif Kechiche —, Urroz explora cómo el deseo lésbico
        desafía las estructuras narrativas convencionales de la novela de
        formación. Adèle no solo descubre su sexualidad: descubre que el deseo
        propio puede ser tan incómodo para la sociedad como para ella misma.
        Un análisis sobre mirada, cuerpo y autoconocimiento en la cultura
        europea del siglo&nbsp;XXI.
      </>
    ),
    imageSrc: "/img3.png",
    imageAlt: "Portada del ensayo — La Vida de Adèle",
    quote:
      "Un recorrido a través de un análisis de obras realizadas por mujeres que lucharon por proyectar su visión del mundo.",
    quoteSource: "— Rolling Stone, Núm. 195, noviembre 2019",
  },
];

export default function EnsayoSection() {
  return (
    <section id="ensayos" className="py-section-gap px-8 bg-surface">
      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant block mb-4">
          PENSAMIENTO CRÍTICO
        </span>
        <h2 className="font-serif text-headline-xl text-on-surface">
          Ensayos &amp; Reflexiones
        </h2>
        <div className="mt-6 h-px w-24 bg-primary/20 mx-auto" />
      </div>

      {/* Essay entries */}
      <div className="max-w-5xl mx-auto space-y-20">
        {essays.map((essay) => (
          <article
            key={essay.numeral}
            className="flex flex-col md:flex-row gap-12 items-start group border-b border-outline-variant pb-20 last:border-0 last:pb-0"
          >
            {/* Roman numeral */}
            <div className="w-12 h-12 flex items-center justify-center border border-primary/20 shrink-0 font-serif italic text-2xl text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
              {essay.numeral}
            </div>

            <div className="flex-1">
              {/* Title + author */}
              <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant block mb-3">
                {essay.author}
              </span>
              <h3 className="font-serif text-[36px] leading-tight text-on-surface mb-2">
                {essay.title}
              </h3>
              <p className="font-sans text-body-lg italic text-secondary mb-6 leading-relaxed">
                {essay.subtitle}
              </p>
              <p className="font-sans text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-prose">
                {essay.body}
              </p>

              {/* Cover + quote */}
              <div className="flex flex-col md:flex-row gap-8 items-start border-t border-outline-variant pt-8">
                <div className="w-28 h-40 relative flex-shrink-0 overflow-hidden">
                  <Image
                    src={essay.imageSrc}
                    alt={essay.imageAlt}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <blockquote className="font-serif italic text-headline-md text-on-surface mb-4 leading-snug">
                    "{essay.quote}"
                  </blockquote>
                  <p className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant">
                    {essay.quoteSource}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
