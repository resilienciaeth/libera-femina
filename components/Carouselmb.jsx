import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function Carouselmb() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex space-x-2">
        <div className="embla__slide">
          <div className="bg-[#4B365D] px-6 rounded-lg mt-6 flex h-[60vh] items-center justify-center nm:h-[50vh]">
            <div className="flex py-10 flex-col space-y-4 ">
              <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                01. CURSOS CREATIVOS PARA
                {' '}
                <br />
                <span className="text-libera-2">DESPERTAR TU ARTE</span>
              </h1>
              <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">Este será un ámbito de aprendizaje, KA’ LARRAZA y Malicia ofrecerán cursos de arte visual y auditiva. Los talleres de creatividad explotaran tu alma artística, podrás aprender todo lo siguiente:</p>
              <ul className="flex flex-col items-start ml-3 text-left font-kanit text-white">
                <li>
                  1. Dibujo Básico
                </li>
                <li>2. Dibuja en Procreate</li>
                <li>3. Ilustración Consciente</li>
                <li>4. Mezcla música</li>
                <li>5. Dibujo para Tatuaje</li>
                <li>6. ¿Cómo empezar a tatuar?</li>
                <li>7. Estilos tatuaje</li>
                <li>8. Teoría musical para producción</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-[#4B365D] px-6 rounded-lg mt-6 flex h-[60vh] items-center justify-center nm:h-[50vh]">
            <div className="flex py-10 flex-col space-y-4 ">
              <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                02. CHARLAS
                {' '}
                <span className="text-libera-2">
                  CREATIVAS
                </span>
              </h1>
              <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">No solo tendrás acceso a los cursos mencionados anteriormente, sino que además nos reunimos una vez al mes virtualmente para:</p>
              <ul className="flex flex-col items-start ml-3 text-left font-kanit text-white">
                <li>
                  Transmitirnos la experiencia
                </li>
                <li>Responder tus preguntas</li>
                <li>Aprender juntos</li>
                <li>Compartir nuevos aprendizajes</li>
                <li>Recibir feedback</li>
                <li>Evolucionar como artistas</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-[#4B365D] px-6 rounded-lg mt-6 flex h-[60vh] items-center justify-center nm:h-[50vh]">
            <div className="flex py-10 flex-col space-y-10 ">
              <div>
                <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                  03. TU NUEVA
                  {' '}
                  <span className="text-libera-2">COMUNIDAD</span>
                </h1>
                <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">
                  Creamos una comunidad alrededor del arte y la liberación, en la que todos mostraran su lado más profundo y artístico.
                  Haremos encuentros virtuales donde todas las personas de esta comunidad se unirán para empoderarse.
                </p>
              </div>
              <div>
                <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                  04. EVENTOS
                  {' '}
                  <span className="text-libera-2">PRESENCIALES</span>
                </h1>
                <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">
                  Todos los miembros de la comunidad nos encontramos 2 veces al año en un evento para disfrutar de todo nuestro arte y filosofía en persona.
                </p>
              </div>
              <div>
                <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                  05. EDUCACION
                  {' '}
                  <span className="text-libera-2">WEB3</span>
                </h1>
                <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">
                  La Web 3 es la tecnología del futuro que nos permite vivir con libertad y seguridad dentro del internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouselmb;
