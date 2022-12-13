import React from 'react';

function Join() {
  return (
    <div className=" px-4 mt-20">
      <div>
        <div className=" nm:flex nm:justify-center space-y-4 nm:space-y-0 nm:space-x-10 mt-10 ">
          <div className="bg-[#5B397B] h-[44vh] nm:w-[80%] rounded-xl nm:rounded-2xl flex items-center justify-center flex-col ">
            <h1 className="text-[18px] nm:text-[40px] px-2 mt-6 text-white text-center font-nesatho font-bold leading-[30px] nm:leading-[50px]">
              UNA COMUNIDAD PRIVADA QUE TE EMPODERA
              {' '}
              <br className="hidden nm:flex" />
              {' '}
              A CONSTRUIR TU VERSIÓN MÁS PURA
              <br className="hidden nm:flex" />
              {' '}
              Y CUMPLIR TUS SUEÑOS.
            </h1>
            <p className="text-[#ECECEC] opacity-40 text-[12px] nm:text-[20px] text-center px-4 mt-6">
              Adquiere tu coleccionable para ser parte de esta comunidad o haz click en "unirse" si ya cuentas con el tuyo.
            </p>
            <div className="mt-10 space-x-4">
              <button className="bg-[#8800FF] font-nesatho text-[14px] nm:text-[26px] text-white px-6 py-1 rounded-2xl">ADQUIRIR</button>
              <button className="border-[#9A2AFC] border-2 font-nesatho text-[14px] nm:text-[26px] text-white px-4 py-1 rounded-2xl" onClick={() => window.open('https://discord.gg/N6272q7rHu')}>
                UNIRSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
