import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Mision() {
  return (
    <div className="mb-20 mt-20 nm:hidden nm:h-[100vh] bg-libera-1 px-10">
      <div className="nm:mt-20">
        <h1 className="text-white text-center uppercase text-[20px] font-nesatho font-bold">
          Mision y
          {' '}
          <span className="text-[#9A2AFC]">beneficios</span>
        </h1>
        <div className="mt-10">
          <p className="text-center text-[12px] text-[#ECECEC] opacity-[0.7] font-kanit px-4">Es una comunidad que busca generar una conexión entre personas que quieran aprender y usar el arte para liberar su energía femenina.</p>
          <p className="mt-4 text-center text-[12px] font-kanit text-[#ECECEC] opacity-[0.7] px-4">Todas las personas que formen parte de Libera Femina tendrán acceso a cursos de arte visual y musical que usamos para explorar esa energía.</p>
          <p className="mt-4 text-center text-[12px] font-kanit text-[#ECECEC] opacity-[0.7] px-4">Todas las personas que formen parte de Libera Femina tendrán acceso a cursos de arte visual y musical que usamos para explorar esa energía.</p>
        </div>
      </div>
    </div>
  );
}

export default Mision;
