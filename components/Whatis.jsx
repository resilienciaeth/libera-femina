import React from 'react';

function Whatis() {
  return (
    <div className="mb-10 nm:h-[100vh] bg-libera-1 px-10">
      <div className="nm:mt-20">
        <h1 className=" text-center uppercase text-[20px] font-nesatho md:text-[70px] text-white font-bold">
          ¿Qué es
          {' '}
          <span className="text-[#9A2AFC]">libera femina?</span>
        </h1>
        <h2 className="mt-5 text-center text-[#9A2AFC] uppercase text-[15px] font-nesatho md:text-[70px] font-bold">SOBRE ESTO</h2>
        <p className="mt-2 text-white  text-center text-[12px] font-kanit px-8">Es una comunidad que busca generar una conexión entre personas que quieran aprender y usar el arte para liberar su energía femenina.</p>
        <p className="mt-4 text-white  text-center text-[12px] font-kanit px-8">Todas las personas que formen parte de Libera Femina tendrán acceso a cursos de arte visual y musical que usamos para explorar esa energía.</p>
      </div>
      <div className="mt-5">
        <video controls src="https://res.cloudinary.com/drxuutjwr/video/upload/v1670012535/liberafemina_fda3de.mp4" autoPlay loop style={{ width: '500px', height: '200px' }} />
      </div>
    </div>
  );
}

export default Whatis;
