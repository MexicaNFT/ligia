import NovelCard from "./NovelCard";

export default function Novels() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#7B7DCD] to-[#B987C4] text-transparent bg-clip-text mb-6">
        Novelas
      </h2>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
        La Muralla (2009) —una novela reeditada de manera bilingüe en el 2017—
        que aborda el tema del desarraigo y la migración. Somoza (2021), novela
        histórica y de autoficción que narra los últimos años de la dictadura
        del General Anastasio Somoza Debayle. ¡Conoce más acerca de estos
        títulos!
      </p>

      <div className="flex justify-center items-center flex-col md:flex-row gap-10">
        <NovelCard
          imageSrc="/img1.png"
          title="La Muralla (2009)"
          description="Una historia sobre el desarraigo y la migración, reeditada de manera bilingüe en 2017."
        />
        <NovelCard
          imageSrc="/image4.png"
          title="Somoza (2021)"
          description="Novela histórica y de autoficción sobre los últimos años de la dictadura de Somoza Debayle."
        />
      </div>
    </section>
  );
}
