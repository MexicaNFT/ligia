import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[780px] flex items-center bg-surface overflow-hidden px-8 py-32"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        {/* Portrait */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative w-64 h-80 md:w-80 md:h-[420px] overflow-hidden">
            <Image
              src="/girl.png"
              alt="Ligia Urroz"
              fill
              priority
              className="object-cover grayscale brightness-95"
            />
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/10 -z-10" />
          </div>
        </div>

        {/* Text */}
        <div className="md:col-span-8">
          <span className="font-sans uppercase tracking-[0.1em] text-xs font-semibold text-on-surface-variant mb-6 block">
            ESCRITORA · PROMOTORA DE LECTURA
          </span>
          <h1 className="font-serif text-[56px] md:text-display-lg leading-[1.1] tracking-[-0.02em] text-on-surface mb-8">
            Ligia Urroz
          </h1>
          <div className="h-px w-24 bg-primary/20 mb-8" />
          <p className="font-sans text-body-lg text-secondary italic max-w-xl leading-relaxed mb-10">
            Managua, Nicaragua (25 de noviembre de 1968).<br />
            Nacionalidad: mexicana y nicaragüense.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-primary text-on-primary px-8 py-3 font-sans uppercase tracking-[0.1em] text-xs font-semibold transition-opacity hover:opacity-80"
            >
              ACERCA DEL AUTOR
            </a>
            <a
              href="/novel"
              className="border border-primary/30 text-on-surface px-8 py-3 font-sans uppercase tracking-[0.1em] text-xs font-semibold transition-all hover:bg-primary hover:text-on-primary hover:border-primary"
            >
              VER NOVELAS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
