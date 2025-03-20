import TaleCard from "../components/TaleCard";

const tales = [
  {
    imageSrc: "/image7.png",
    title: "Narciso Negro",
    description:
      "Aborda el abuso psicológico por parte de uno de los integrantes de la pareja. El narcisista se ama desde una pulsión irracional y desenfrenada, sobaja y humilla al abusado quien sufre y calla, se desgarra y hasta llega a sentirse culpable y merecedor de dichos maltratos. El narcisista siempre es el mejor en todo, el que lo ha vivido todo y tiene supremacía sobre el abusado, se aprovecha de sus puntos débiles y lo manipula de formas inéditas.",
    imageRight: false,
  },
  {
    imageSrc: "/image5.png",
    title: "Viajes Oníricos",
    description:
      "Basado en el mito de Eros y Psique. Alma es una periodista que escribe artículos relacionados con la música. Una amiga le presenta a Ed, quien es el guitarrista de una banda de rock. Alma y Ed se enamoran más allá de la realidad, tienen experiencias eróticas tanto en sueños como cuando él está tocando su guitarra en algunos conciertos. Es por ello que son viajes entre la realidad y los sueños.",
    imageRight: true,
  },
  {
    imageSrc: "/image9.png",
    title: "Diario de un Aislamiento",
    description:
      "Escrito a finales de marzo y principios de abril de 2020, al iniciar la pandemia por Covid 19. En el cuento aborda el dolor, los descubrimientos y afectaciones, que de alguna manera vivimos en medio de este proceso, como es el insomnio, la angustia del encierro, las fobias de no tocar para no ser infectado. La protagonista va escribiendo en un diario su sentir, asombros, miedos y lo que va aprendiendo en las noticias sobre el virus.",
    imageRight: false,
  },
  {
    imageSrc: "/image10.png",
    title: "Por qué quise ser invisible",
    description:
      "Cuento juvenil acerca del bullying o acoso escolar, también se aborda la problemática del abuso en redes sociales. María Fernanda es una niña abusada por sus compañeros de clase, ella se refugia y sale adelante a través de la música y del amor de su familia.",
    imageRight: true,
  },
];

export default function Tale() {
  return (
    <section className="py-20 bg-[#131415] mt-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center  text-[#FFFFFF] bg-clip-text mb-6">
          Cuento
        </h2>
        <p className="text-[#FFFFFF] text-center max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Ha publicado cuentos en la serie Mujeres que cuentan; "Viajes
          Oníricos" en Once mujeres que cuentan erotismo, "Narciso negro" en
          Mujeres de miedo que cuentan, "Diario de un aislamiento" para Mujeres
          que cuentan secretos. También ha escrito cuento juvenil: "Por qué
          quise ser invisible" para la antología Abusado.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-10 space-y-6 ">
        {tales.map((tale, index) => (
          <TaleCard key={index} {...tale} />
        ))}
      </div>
    </section>
  );
}
