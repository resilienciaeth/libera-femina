import React from 'react';

function Card1() {
  return (
    <div className="embla__slide">
      <div className="bg-[#4B365D] px-6 rounded-lg mt-6 flex h-[60vh] items-center justify-center nm:h-[50vh]">
        <div className="flex py-10 flex-col space-y-4 ">
          <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
            01. CURSOS CREATIVOS PARA
            {' '}
            <br />
            <span className="text-libera-2">DESPERTAR TU ARTE</span>
          </h1>
          <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">Este será un espacio de aprendizaje, Ka’ Lazarra y Doc’ Malicia ofrecerán cursos de arte visual y auditivo. Los talleres de creatividad explotarán tu alma artística, podrás aprender todo lo siguiente:</p>
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
  );
}

export default Card1;
