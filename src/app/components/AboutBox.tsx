import Image from "next/image";

export default function AboutBox() {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[903px] mt-20 md:mt-40 h-auto md:h-[535px] bg-white shadow-lg rounded-lg overflow-hidden z-10">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 h-48 md:h-full relative">
          <Image
            src="/women_with_guitar.png"
            alt="Ligia Urroz"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto mt-4 md:mt-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-black">
            Acerca de
          </h2>
          <p className="text-gray-700 text-xs md:text-base">
            Autora y promotora de la lectura. Guitarrista en una banda de rock.
          </p>

          <h2 className="text-[#A1A1A1] text-xs md:text-base mt-4 md:mt-6">
            NÚMERO DE PUBLICACIONES
          </h2>
          <p className="text-black text-xs md:text-base">11+</p>

          <h2 className="text-[#A1A1A1] text-xs md:text-base mt-4 md:mt-6">
            PROYECTOS
          </h2>
          <p className="text-black text-xs md:text-base">50+</p>

          <h2 className="text-[#A1A1A1] text-xs md:text-base mt-4 md:mt-6">
            CONTACTO
          </h2>
          <p className="text-black text-xs md:text-base">
            ligia@ligiaurroz.com
          </p>
        </div>
      </div>
    </div>
  );
}
