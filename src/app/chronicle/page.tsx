import NovelCard from "../components/NovelCard";

export default function Chronicle() {
  return (
    <section className="bg-[#131415] py-20 px-6 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center  text-[#FFFFFF] bg-clip-text mb-6">
        Crónicas
      </h2>

      <p className="text-[#FFFFFF] text-center max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
        Ligia ha explorado la crónica en sus obras más recientes. Su primera
        publicación de este género literario fue La noche que fui la guitarra de
        Steve Vai (2019) donde, a partir de su experiencia de primera mano como
        asistente, hace años, a un concierto del guitarrista Steve Vai, narra
        sus vivencias. Como segundo texto en el género, Ligia describe lo que se
        perdió con la llegada del 2020 en Lo que el 20 se llevó (2020). ¡Conoce
        más acerca de estos títulos!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-4">
        <NovelCard
          imageSrc="/image02.png"
          title="Lo que el 20 se llevó"
          description="Lo que el 20 se llevó trata sobre el acto de resistir. Aguantarte las ganas de salir, de abrazar a tus seres queridos, de asistir a una fiesta, a un partido de futbol, a un sauna público, a un concierto, a cualquier lugar donde el calor humano reinara. <br/><br/> Más que una antología de textos sobre el tema, este libro es una fiesta. Esa reunión que se antojaba imposible antes de que se distribuyera la vacuna. Si piensan que ya se ha escrito todo sobre la pandemia basta asomarse a estas páginas para encontrarse con historias que todavía no habían sido contadas. La música, el cine, el sexo, los meseros, etcétera, conviven aquí sin necesidad de ser sanitizados. Entre la crónica, el ensayo personal y el reporte emocional, los testimonios que el lector tiene entre las manos son un vistazo al mundo interior propiciado por el alineamiento."
        />

        <NovelCard
          imageSrc="/image01.png"
          title="La noche que fui la guitarra de Steve Vai"
          description="A partir de su experiencia de primera mano como asistente, hace años, a un concierto del guitarrista Steve Vai, la autora de este texto hace un recuento de lo que fue estar ahí pero, sobre todo, del golpe de adrenalina que significó compartir minutos imposibles con el músico y “componer” una canción con él, para luego “ser” su guitarra. La crónica ahonda en la potencia emocional que se acumula en un concierto, más la incontestable presencia del ídolo personal al alcance de la mano."
        />
      </div>
    </section>
  );
}
