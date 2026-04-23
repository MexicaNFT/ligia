import Image from "next/image";

const tales = [
  {
    imageSrc: "/image7.png",
    title: "Narciso Negro",
    collection: "Mujeres de miedo que cuentan · Narratio, 2019",
    description:
      "Aborda el abuso psicológico dentro de la pareja. El narcisista se ama desde una pulsión irracional, sobaja y humilla al abusado, quien sufre y calla. Se aprovecha de sus puntos débiles y lo manipula de formas inéditas.",
  },
  {
    imageSrc: "/image5.png",
    title: "Viajes Oníricos",
    collection: "Once mujeres que cuentan erotismo · Narratio, 2018",
    description:
      "Basado en el mito de Eros y Psique. Alma es una periodista que escribe sobre música. Ella y Ed, guitarrista de rock, se enamoran más allá de la realidad, en viajes que cruzan la frontera entre los sueños y el deseo.",
  },
  {
    imageSrc: "/image9.png",
    title: "Diario de un Aislamiento",
    collection: "Mujeres que cuentan secretos · Narratio, 2020",
    description:
      "Escrito al iniciar la pandemia de Covid-19. La protagonista narra en su diario el dolor, el insomnio, la angustia del encierro y las fobias de no tocar para no ser infectada.",
  },
  {
    imageSrc: "/image10.png",
    title: "Por qué quise ser invisible",
    collection: "Abusado · Rosa Ma. Porrúa Ediciones, 2020",
    description:
      "Cuento juvenil sobre el bullying y el abuso en redes sociales. María Fernanda es acosada por sus compañeros y se refugia y sale adelante a través de la música y el amor de su familia.",
  },
];

export default function CuentoSection() {
  return (
    <section id="cuento" className="py-section-gap px-8 bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant block mb-4">
            NARRATIVA BREVE
          </span>
          <h2 className="font-serif text-headline-xl italic text-on-surface mb-4">
            Cuentos &amp; Relatos
          </h2>
          <div className="h-px w-16 bg-primary/20 mx-auto" />
        </div>

        {/* Story list */}
        <div className="space-y-0">
          {tales.map((tale) => (
            <div
              key={tale.title}
              className="group border-b border-outline-variant pb-10 pt-10 first:pt-0 flex flex-col md:flex-row md:items-start gap-8 hover:bg-surface-container-low transition-colors px-4 -mx-4"
            >
              {/* Thumbnail */}
              <div className="w-20 h-28 md:w-24 md:h-32 flex-shrink-0 overflow-hidden">
                <Image
                  src={tale.imageSrc}
                  alt={tale.title}
                  width={96}
                  height={128}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-tertiary-container bg-tertiary-fixed px-2 py-0.5 mb-3 inline-block">
                  {tale.collection}
                </span>
                <h3 className="font-serif text-headline-md text-on-surface mb-2 group-hover:italic transition-all">
                  {tale.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {tale.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
