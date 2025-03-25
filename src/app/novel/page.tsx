import NovelCard from "../components/NovelCard";

export default function Novels() {
  return (
    <section className="bg-[#131415] py-20 px-6 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center  text-[#FFFFFF] bg-clip-text mb-6">
        Novelas
      </h2>

      <p className="text-[#FFFFFF] text-center max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
        La Muralla (2009) —una novela reeditada de manera bilingüe en el 2017—
        que aborda el tema del desarraigo y la migración. Somoza (2021), novela
        histórica y de autoficción que narra los últimos años de la dictadura
        del General Anastasio Somoza Debayle. ¡Conoce más acerca de estos
        títulos!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-4">
        <NovelCard
          imageSrc="/image4.png"
          title="La Muralla"
          description="La Muralla es una historia de hombres y mujeres que buscan un lugar fuera de su terruño,que pretenden alcanzar un sueño que alguien más les ha contado. <br/><br/>Vista desde la nostalgia por la tierra que se ha dejado atrás y desde el sentimiento de no pertenecer a ninguna parte, los personajes son llevados a encontrar el miedo y la más grande de las desolaciones… <br/><br/>María Chárbel Solorio Sánchez nace en un pueblo tequilero, en el cual, se mezclan las historias de sus habitantes con las de los fuereós que van de paso, esos que buscan cruzar la muralla y llegar al norte.<br/><br/>María crece rodeada de magia, esa que por ser tan común y corriente, pasa desapercibida: sus padres, la gente del pueblo, sus oficios, los amaneceres cargados de colores.<br/><br/>José, su papá, decide cruzar la frontera para darle a su pequeña familia una vida mejor. María lo sigue y se pierde en el desierto. Cansada y desairada, María delira. Inmersas en este delirio, se tejen las historias de Martín el carretero, de la yerbera, de Felipe el de los sueños, de los polleros Justino y el Batracio formando así, la manta que cobijará a María en su particular búsqueda del norte…"
        />

        <NovelCard
          imageSrc="/img1.png"
          title="Somoza"
          description="Emigrada de su natal Nicaragua a los once años, pocos días antes del triunfo de la revolución de 1979, Urroz reconstruye al inicio la conspiración que llevaría a la feroz ejecución en Paraguay, en 1980, de Anastasio Somoza Debayle, el dictador exiliado, incluidas las casualidades fortuitas y algunos detalles hilarantes. <br/><br/>Sin embargo, son sus recuerdos privados, sus relatos de familia y las distintas voces que encarna los que cuentan la historia de los últimos días del régimen en Nicaragua: desde el terremoto de 1972, que arrasó con la capital del país y marcó el inicio de la revuelta, los asesinatos de opositores, hasta la riqueza y poder inimaginables que poseía Somoza, los que le permitían incluso ser amigo de sus enemigos… <br/><br/>En Somoza encontramos las contradicciones y excesos del autoritarismo en América Latina, pero también una mirada única que, a partir de la memoria de la infancia de Ligia, vivida al lado del fallido mandatario, advierte sobre el alcance de la polarización política, la violencia armada y el engaño detrás de las promesas de una sociedad mejor <br/><br/>Disponible en formato digital y físico"
        />
      </div>
    </section>
  );
}
