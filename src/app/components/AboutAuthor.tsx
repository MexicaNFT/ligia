import { Sparkle } from "lucide-react";

export default function AboutAuthor() {
  return (
    <section className="bg-white py-20 px-6">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#7B7DCD] to-[#B987C4] text-transparent bg-clip-text mb-12">
        Acerca del Autor
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section 1 */}
        <div className="flex items-start space-x-2">
          <Sparkle
            className="w-4 h-4 text-black flex-shrink-0 mt-2"
            fill="black"
          />
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold mb-2">
              Estudios superiores
            </h3>
            <p className="text-[#000000] text-sm md:text-[18px] leading-relaxed">
              Licenciada en economía por el ITAM, Master of Science in
              Industrial Relations and Personnel Management por la London School
              of Economics and Political Science, Máster en literatura en la era
              digital por la Universitat de Barcelona, Máster en literatura por
              la Universidad Anáhuac, Especialización en literatura comparada
              por la Universitat de Barcelona, Posgrado en lectura, edición y
              didáctica de la literatura y TIC por la Universitat de Barcelona. 
              Ha cursado más de una decena de diplomados en arte, literatura y
              cinematografía en la Universidad Anáhuac. Egresada de
              Laboratoriodenovela.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-start space-x-2">
          <Sparkle
            className="w-4 h-4 text-black flex-shrink-0 mt-2"
            fill="black"
          />
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold mb-2">
              Actividades profesionales
            </h3>
            <p className="text-[#000000] text-sm md:text-[18px] leading-relaxed">
              Colaboró en las antologías de cuento; Once mujeres que cuentan
              erotismo con el cuento Viajes Oníricos, Narratio (2018), Mujeres
              de miedo que cuentan con Narciso negro, Narratio (2019), Mujeres
              que cuentan secretos con el cuento Diario de un aislamiento,
              Narratio (2020) y la antología de cuentos juvenil titulada Abusado
              con su cuento Por qué quise ser invisible, Rosa Ma. Porrúa
              Ediciones (2020). Ese mismo año fue entrevistada por Paulina
              Vieitez para el libro Fabulosas de Océano y en el 2021 se publicó
              su crónica De guerras, enemigos y dos confinamientos en la
              antología Lo que el 20 se llevó, (Cal y Arena).
              <br /> También ha incursionado en el género ensayístico y en el
              2018 se publicó El Color Púrpura, Persépolis y la Vida de Adèle:
              un ejercicio de literatura comparada desde una perspectiva de
              género, Editorial Narratio. 
              <br /> Su novela, “La Muralla”, fue publicada en el 2009 por
              Laboratoriodenovela (3 ediciones) y en el 2017, editorial
              Narratio, publicó una nueva edición bilingüe. 
              <br /> En marzo del 2021 salió su novela “Somoza” bajo el sello de
              Planeta, la cual a los seis meses de su lanzamiento fue
              reimpresa.  <br />
              También se le ha publicado crónica y ensayo en diversos periódicos
              culturales mexicanos. 
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-start space-x-2">
          <Sparkle
            className="w-4 h-4 text-black flex-shrink-0 mt-2"
            fill="black"
          />
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold mb-2">
              Reconocimientos
            </h3>
            <p className="text-[#000000] text-sm md:text-[18px] leading-relaxed">
              Su novela La Muralla fue preseleccionada en el 2010 entre 6,779
              títulos para el acervo de Bibliotecas Escolares y de Aulas de las
              escuelas públicas de educación básica. Específicamente para
              tercero de secundaria bajo "Narrativa Contemporánea”. Se encuentra
              en el catálogo de libros de la SEP.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex items-start space-x-2">
          <Sparkle
            className="w-4 h-4 text-black flex-shrink-0 mt-2"
            fill="black"
          />
          <div>
            <h3 className="text-xl md:text-[24px] font-semibold mb-2">
              Otras actividades
            </h3>
            <p className="text-[#000000] text-sm md:text-[18px] leading-relaxed">
              Consejera de Share (fundación cuya misión es formar una sociedad
              solidaria, en la cual personas de distintos contextos se
              relacionen de forma horizontal, valorando sus diferencias y
              apoyándose mutuamente), Consejera de MIPI (mujeres egresadas del
              ITAM con un interés especial por la educación y la igualdad de
              género), Embajadora de Juconi (Junto con las niñas y niños,
              fundación encargada de desarrollar, aplicar y compartir soluciones
              para niñas, niños, jóvenes y familias afectadas por la violencia,
              con la finalidad de generar un cambio hacia la paz, la dignidad y
              la formación de un hogar seguro). 
              <br />
              Promotora de la lectura, guitarra rítmica de la banda de rock
              ochentero Octubre XX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
