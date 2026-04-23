export default function ComingSoonSection() {
  return (
    <section id="proxima-novela" className="py-section-gap bg-primary-container px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Book placeholder */}
          <div className="md:col-span-4">
            <div className="aspect-[2/3] max-w-xs border border-on-primary/20 flex flex-col items-center justify-center bg-primary-container/60 relative overflow-hidden">
              {/* Decorative lines */}
              <div className="absolute inset-4 border border-on-primary/10" />
              <span className="font-serif italic text-[80px] leading-none text-on-primary/10 select-none">
                ?
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-8">
            <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-primary-container block mb-6">
              PRÓXIMA PUBLICACIÓN
            </span>
            <h2 className="font-serif text-headline-xl text-on-primary mb-6 italic">
              Nueva novela en camino
            </h2>
            <div className="h-px w-24 bg-on-primary/20 mb-8" />
            <p className="font-sans text-body-lg text-on-primary-container leading-relaxed max-w-prose mb-10">
              Ligia Urroz trabaja en su próxima obra. Una nueva historia está
              por llegar — mantente al pendiente para conocer todos los
              detalles del lanzamiento.
            </p>
            <a
              href="mailto:ligia.urroz@gmail.com"
              className="inline-block font-sans uppercase tracking-[0.1em] text-xs font-semibold border border-on-primary/40 text-on-primary px-8 py-3 hover:bg-on-primary hover:text-primary-container transition-all duration-300"
            >
              RECIBIR NOVEDADES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
