"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Novel = {
  imageSrc: string;
  title: string;
  year: string;
  synopsis: string;
  fullText: React.ReactNode;
};

const novels: Novel[] = [
  {
    imageSrc: "/image4.png",
    title: "La Muralla",
    year: "2009 · 2017 (edición bilingüe) · Narratio",
    synopsis:
      "Una historia de hombres y mujeres que buscan un lugar fuera de su terruño, que pretenden alcanzar un sueño que alguien más les ha contado. Vista desde la nostalgia por la tierra dejada atrás y el sentimiento de no pertenecer a ninguna parte.",
    fullText: (
      <div className="space-y-4 font-sans text-body-md text-on-surface-variant leading-relaxed">
        <p>
          La Muralla es una historia de hombres y mujeres que buscan un lugar
          fuera de su terruño, que pretenden alcanzar un sueño que alguien más
          les ha contado.
        </p>
        <p>
          Vista desde la nostalgia por la tierra que se ha dejado atrás y desde
          el sentimiento de no pertenecer a ninguna parte, los personajes son
          llevados a encontrar el miedo y la más grande de las desolaciones…
        </p>
        <p>
          María Chárbel Solorio Sánchez nace en un pueblo tequilero, en el
          cual se mezclan las historias de sus habitantes con las de los
          forasteros que van de paso, esos que buscan cruzar la muralla y
          llegar al norte.
        </p>
        <p>
          María crece rodeada de magia, esa que por ser tan común y corriente
          pasa desapercibida: sus padres, la gente del pueblo, sus oficios, los
          amaneceres cargados de colores.
        </p>
        <p>
          José, su papá, decide cruzar la frontera para darle a su pequeña
          familia una vida mejor. María lo sigue y se pierde en el desierto.
          Cansada y desairada, María delira. Inmersas en este delirio, se tejen
          las historias de Martín el carretero, de la yerbera, de Felipe el de
          los sueños, de los polleros Justino y el Batracio — formando así la
          manta que cobijará a María en su particular búsqueda del norte…
        </p>
        <p className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant pt-2">
          Preseleccionada entre 6,779 títulos para el acervo SEP · Tercero de
          secundaria, Narrativa Contemporánea.
        </p>
      </div>
    ),
  },
  {
    imageSrc: "/img1.png",
    title: "Somoza",
    year: "2021 · Planeta",
    synopsis:
      "Novela histórica y de autoficción que narra los últimos años de la dictadura del General Anastasio Somoza Debayle. A los seis meses de su lanzamiento fue reimpresa. Disponible en formato digital y físico.",
    fullText: (
      <div className="space-y-4 font-sans text-body-md text-on-surface-variant leading-relaxed">
        <p>
          Emigrada de su natal Nicaragua a los once años, pocos días antes del
          triunfo de la revolución de 1979, Urroz reconstruye al inicio la
          conspiración que llevaría a la feroz ejecución en Paraguay, en 1980,
          de Anastasio Somoza Debayle, el dictador exiliado, incluidas las
          casualidades fortuitas y algunos detalles hilarantes.
        </p>
        <p>
          Sin embargo, son sus recuerdos privados, sus relatos de familia y las
          distintas voces que encarna los que cuentan la historia de los
          últimos días del régimen en Nicaragua: desde el terremoto de 1972,
          que arrasó con la capital del país y marcó el inicio de la revuelta,
          los asesinatos de opositores, hasta la riqueza y poder inimaginables
          que poseía Somoza, los que le permitían incluso ser amigo de sus
          enemigos…
        </p>
        <p>
          En Somoza encontramos las contradicciones y excesos del autoritarismo
          en América Latina, pero también una mirada única que, a partir de la
          memoria de la infancia de Ligia, vivida al lado del fallido
          mandatario, advierte sobre el alcance de la polarización política, la
          violencia armada y el engaño detrás de las promesas de una sociedad
          mejor.
        </p>
        <p className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant pt-2">
          Disponible en formato digital y físico.
        </p>
      </div>
    ),
  },
  {
    imageSrc: "/por-mi-gran-culpa.png",
    title: "Por mi gran culpa",
    year: "2024 · Hachette Livre México",
    synopsis:
      "Un secreto soltado de sopetón por la abuela de Ligia: su trastatarabuelo fue un alto jerarca de la Iglesia que embarazó a una joven Josefa. Ligia tomó esa bestia de rumores y la transformó en una obra de ficción. Disponible en ebook y audiolibro.",
    fullText: (
      <div className="space-y-4 font-sans text-body-md text-on-surface-variant leading-relaxed">
        <p>
          Un secreto fue soltado de sopetón por la abuela de Ligia: tu
          trastatarabuelo fue un alto jerarca de la Iglesia que embarazó a una
          joven Josefa, tu trastatarabuela. El escándalo fue tal, que Josefa
          tuvo que mudarse de España a Nicaragua.
        </p>
        <p>
          El rumor fue en extremo doloroso para una familia con una honda
          raigambre católica. La verdad no pudo hablarse abiertamente por temor
          a Dios, hasta que Ligia tomó a esa bestia de rumores y la transformó
          en una obra de ficción. Ligia aireó esa llaga familiar reelaborando la
          posible historia con una magnífica novela.
        </p>
        <p>
          Aquí hay de todo: reflexiones sobre el abuso, celos, confusión,
          muerte, pero a la vez, alegría, ganas de vivir, amor, solidaridad. No
          hay víctimas, ni villanos. Ligia presenta la condición humana con sus
          paradojas, contradicciones, revanchas. Narrada como las grandes
          novelas del siglo XIX, aquí los acontecimientos se suceden uno tras a
          otro.
        </p>
        <blockquote className="border-l-4 border-primary-container pl-6 my-6">
          <p className="font-serif italic text-on-surface text-body-lg leading-relaxed">
            "Por mi gran culpa conmueve, emociona, divierte, nos enoja, nos
            hace reír, nos descubre mundos, nos confronta y nos hace viajar por
            ese gran río que es la experiencia humana."
          </p>
          <cite className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant not-italic mt-3 block">
            — Guillermo Arriaga
          </cite>
        </blockquote>
        <p className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant pt-2">
          Disponible en ebook y audiolibro · Hachette Livre México.
        </p>
      </div>
    ),
  },
];

export default function NovelaSection() {
  const [selected, setSelected] = useState<Novel | null>(null);

  return (
    <section id="novelas" className="py-section-gap bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant block mb-2">
            CATÁLOGO SELECCIONADO
          </span>
          <h2 className="font-serif text-headline-xl text-on-surface">Novelas</h2>
        </div>

        {/* Cards grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {novels.map((novel) => (
            <div
              key={novel.title}
              className="group cursor-pointer"
              onClick={() => setSelected(novel)}
            >
              <div className="aspect-[2/3] mb-6 overflow-hidden bg-surface border border-transparent group-hover:border-primary/20 transition-all duration-500">
                <Image
                  src={novel.imageSrc}
                  alt={novel.title}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant block mb-2">
                {novel.year}
              </span>
              <h3 className="font-serif text-headline-md text-on-surface mb-3">
                {novel.title}
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                {novel.synopsis}
              </p>
              <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface group-hover:underline underline-offset-8 transition-all">
                VER DETALLES
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-8"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative z-10 bg-surface w-full md:max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              {/* Cover */}
              <div className="w-full md:w-52 flex-shrink-0 aspect-[2/3] md:aspect-auto relative">
                <Image
                  src={selected.imageSrc}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-10 relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-on-surface/40 hover:text-on-surface transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={18} />
                </button>

                <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant block mb-3">
                  {selected.year}
                </span>
                <h3 className="font-serif italic text-headline-xl text-on-surface mb-6 leading-tight pr-8">
                  {selected.title}
                </h3>
                <div className="h-px w-16 bg-primary/20 mb-8" />
                {selected.fullText}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
