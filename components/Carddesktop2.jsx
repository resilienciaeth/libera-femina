import React from 'react';

function Carddesktop2() {
  return (
    <div className="embla__slide flex items-center justify-center">
      <div className="bg-[#4B365D] rounded-3xl max-w-[800px]">
        <div className="px-10 py-10">
          <div>
            <h1 className="text-[30px] text-white font-nesatho">
              02. CHARLAS
              {' '}
              <br />
              {' '}
              <span className="text-libera-2">CREATIVAS</span>
            </h1>
          </div>
          <p className="text-[17px] font-kanit text-white mt-6">No solo tendrás acceso a los cursos mencionados anteriormente, sino que además nos reunimos una vez al mes virtualmente para:</p>
          <div className="flex flex-row font-kanit space-x-16 text-white text-[24px] mt-10">
            <ul className="space-y-4">
              <li>Transmitirnos la experiencia</li>
              <li>Responder tus preguntas</li>
              <li>Aprender juntos</li>
            </ul>
            <ul className="space-y-4">
              <li>Recibir feedback</li>
              <li>Evolucionar como artistas</li>
              <li>Compartir nuevos aprendizajes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddesktop2;
