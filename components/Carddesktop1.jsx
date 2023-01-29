import React from 'react';

function Carddesktop1() {
  return (
    <div className="embla__slide flex items-center justify-center">
      <div className="bg-[#4B365D] rounded-3xl max-w-[800px]">
        <div className="px-10 py-10">
          <div>
            <h1 className="text-[30px] text-white font-nesatho">
              01. CURSOS CREATIVOS PARA
              {' '}
              <br />
              {' '}
              <span className="text-libera-2">DESPERTAR TU ARTE</span>
            </h1>
          </div>
          <p className="text-[17px] font-kanit text-white mt-6">Este será un ámbito de aprendizaje, KA’ LARRAZA y Malicia ofrecerán cursos de arte visual y auditiva. Los talleres de creatividad explotaran tu alma artística, podrás aprender todo lo siguiente:</p>
          <div className="flex flex-row font-kanit space-x-16 text-white text-[24px] mt-10">
            <ul className="space-y-4">
              <li>1. Dibujo Básico</li>
              <li>3. Ilustración Consciente</li>
              <li>5. Dibujo para Tatuaje</li>
              <li>7. Estilos tatuaje</li>
            </ul>
            <ul className="space-y-4">
              <li>2. Dibuja en Procreate</li>
              <li>4. Mezcla música</li>
              <li>6. ¿Cómo empezar a tatuar?</li>
              <li>8. Teoría musical para producción</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddesktop1;
