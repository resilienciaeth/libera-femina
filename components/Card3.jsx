import React from 'react';

function Card3() {
  return (
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
              04. EDUCACION
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
  );
}

export default Card3;
