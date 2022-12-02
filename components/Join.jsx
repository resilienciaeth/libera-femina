import React from 'react';

function Join() {
  return (
    <div className=" px-4 mt-20 nm:flex nm:flex-col nm:justify-center ">
      <div>
        <div className=" nm:h-auto space-y-4 nm:space-y-0 nm:space-x-10 mt-10 nm:flex nm:flex-row">
          <div className="bg-[#5B397B] h-[30vh] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="text-[18px] nm:text-[18px] px-2 mt-6 text-white text-center font-nesatho font-bold leading-[30px]">
              UNA COMUNIDAD PRIVADA QUE TE EMPODERA A CONSTRUIR TU VERSIÓN MÁS PURA Y CUMPLIR TUS SUEÑOS.
            </h1>
            <p className="text-[#ECECEC] opacity-40 text-[12px] nm:text-[18px] text-center px-4 mt-6">
              Adquiere tu NFT para ser parte de esta comunidad haz click si ya cuentas con el tuyo.
            </p>
            <div className="mt-10 space-x-4">
              <button className="bg-[#8800FF] font-nesatho text-[14px] text-white px-6 py-1 rounded-2xl">UNIRSE</button>
              <button className="border-[#9A2AFC] border-2 font-nesatho text-[14px] text-white px-4 py-1 rounded-2xl">CONSIGUE TU NFT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
