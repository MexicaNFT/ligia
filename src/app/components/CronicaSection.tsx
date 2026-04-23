import Image from "next/image";

const featured = {
  imageSrc: "/image02.png",
  title: "Lo que el 20 se llevó",
  date: "2020 · Cal y Arena",
  amazonUrl: "https://a.co/d/0deTgKv0",
  description:
    "Lo que el 20 se llevó trata sobre el acto de resistir. Entre la crónica, el ensayo personal y el reporte emocional, los testimonios reunidos son un vistazo al mundo interior propiciado por el confinamiento. La música, el cine, el sexo, los meseros — todo convive sin necesidad de ser sanitizado.",
};

const secondary = [
  {
    imageSrc: "/image01.png",
    title: "La noche que fui la guitarra de Steve Vai",
    date: "2019",
    description:
      "Desde su experiencia de primera mano en un concierto del guitarrista Steve Vai, la autora narra el golpe de adrenalina de compartir minutos imposibles con el músico y \"componer\" una canción con él, para luego \"ser\" su guitarra.",
  },
];

export default function CronicaSection() {
  return (
    <section id="cronicas" className="py-section-gap bg-surface-container-high px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant block mb-2">
            OBSERVACIONES DEL PRESENTE
          </span>
          <h2 className="font-serif text-headline-xl italic text-on-surface">Crónicas</h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured large */}
          <a href={featured.amazonUrl} target="_blank" rel="noopener noreferrer" className="md:col-span-7 group cursor-pointer">
            <div className="aspect-video mb-8 overflow-hidden">
              <Image
                src={featured.imageSrc}
                alt={featured.title}
                width={800}
                height={450}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-primary/60 block mb-2">
              CRÓNICA DESTACADA · {featured.date}
            </span>
            <h3 className="font-serif text-[36px] leading-tight text-on-surface mb-4 group-hover:underline decoration-1 underline-offset-4">
              {featured.title}
            </h3>
            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              {featured.description}
            </p>
          </a>

          {/* Secondary list */}
          <div className="md:col-span-5 border-l border-primary/10 pl-12 flex flex-col justify-between">
            <div className="space-y-12">
              {secondary.map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="aspect-video mb-4 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="font-sans uppercase tracking-[0.1em] text-[10px] font-semibold text-on-surface-variant block mb-2">
                    {item.date}
                  </span>
                  <h4 className="font-serif text-headline-md text-on-surface mb-2 group-hover:italic transition-all">
                    {item.title}
                  </h4>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
