import Image from "next/image";
import { Star } from "lucide-react";

export default function Ensayos() {
  return (
    <div className="flex flex-col items-center px-4 py-10 md:px-10 lg:px-20 mt-10 bg-[#131415]">
      <div className="md:w-full md:h-[900px] relative w-full h-80">
        <Image
          src="/image03.png"
          alt="Ensayo"
          fill
          style={{ objectFit: "fill" }}
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mt-6 text-white">
        Ensayos
      </h1>
      <h2 className="text-xl text-center mt-2 text-white">
        El Color Púrpura, Persépolis y la Vida de Adèle.
      </h2>
      <p className="text-center text-white max-w-2xl mt-4">
        Es un ensayo en el cual Urroz vincula la cultura femenina como una
        experiencia colectiva que une a las escritoras a través del tiempo y el
        espacio. Su análisis parte de tres obras fundamentales que son ejemplo
        de lucha: <i>El Color Púrpura</i> de Alice Walker, <i>Persépolis</i> de
        Marjane Satrapi y <i>El azul es un color cálido</i> de Julie Maroh,
        obras que nos ofrecen una visión de la situación de la mujer en la
        cultura americana, la europea y el mundo islámico.
      </p>
      <div className="mt-8 bg-white p-2 rounded-lg shadow-lg border-1 border-transparent bg-gradient-to-br from-[#7B7DCD] to-[#B987C4]">
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-md">
          <div className="w-80 h-48 relative">
            <Image
              src="/image04.png"
              alt="Author"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-black font-bold text-lg">
              "El ensayo de Ligia Urroz hace un recorrido a través de un
              análisis de obras realizadas por mujeres que lucharon por
              proyectar su visión del mundo."
            </p>
            <p className="text-black mt-2 text-xs">
              – Rolling Stone (Número 195, noviembre, 2019)
            </p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={
                    index < 4 ? "fill-current text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
              <span className="ml-2 text-gray-700">4.5/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
