import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#131415] text-white py-40 md:py-60 flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-center md:items-center md:gap-x-8 text-center md:text-left px-6">
        <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden  flex-shrink-0">
          <Image
            src="/girl.png"
            alt="Ligia Urroz"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:ml-10 mt-6 md:mt-0">
          <h1 className="text-4xl md:text-7xl font-normal tracking-normal mb-4">
            Ligia <br />
            Urroz
          </h1>
          <p className="text-lg md:text-md text-[#A1A1A1] tracking-normal max-w-xl">
            Managua, Nicaragua (25 de noviembre de 1968). <br />
            Nacionalidad: mexicana y nicaragüense.
          </p>
        </div>
      </div>
    </section>
  );
}
