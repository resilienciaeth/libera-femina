import React, { useRef } from 'react';

function Whatis() {
  const web3 = useRef(null);
  return (
    <div ref={web3} className="mb-10 nm:h-[60vh] bg-libera-1 px-10 nm:flex nm:flex-row">
      <div className="nm:mt-20 nm:w-[50%] nm:flex nm:flex-col nm:items-center nm:justify-center">
        <h1 className="text-center uppercase text-[20px] nm:text-[35px] font-nesatho text-white font-bold">
          ¿Qué es
          {' '}
          <span className="text-[#9A2AFC]">libera femina?</span>
        </h1>
        <p className="mt-2 text-white  text-center text-[12px] nm:text-[20px] font-kanit px-8 md:px-20">Es una comunidad que busca generar una conexión entre personas que quieran aprender y usar el arte para liberar su energía femenina.</p>
        <p className="mt-4 text-white  text-center text-[12px] nm:text-[20px] font-kanit px-8 md:px-20">Todas las personas que formen parte de Libera Femina tendrán acceso a cursos de arte visual y musical que usamos para explorar esa energía.</p>
      </div>
      <div className="mt-5 nm:w-[50%] nm:flex nm:flex-col nm:items-center nm:justify-center">
        <video controls src="https://res.cloudinary.com/drxuutjwr/video/upload/v1670012535/liberafemina_fda3de.mp4" loop />
      </div>
    </div>
  );
}

export default Whatis;
