import React from 'react';

function Card2() {
  return (
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
  );
}

export default Card2;
