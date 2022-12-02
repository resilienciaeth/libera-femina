import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Header() {
  return (
    <div className="bg-libera-1 flex justify-center items-start h-[90vh]">
      <div className="flex flex-col mt-20 justify-center items-center">
        <p className=" font-kanit font-bold text-[15px] text-libera-2">KA' LARRAZA & MALICIA</p>
        <h1 className="text-center text-[58px] nm:text-[100px] font-bold leading-[50px] font-nesatho nm:leading-[120px] text-white">
          LIBERA
          <br />
          {' '}
          <span className="text-[65px] title-border">FEMINA</span>
          {' '}
        </h1>
        <p1 className="mt-4 font-kanit text-white text-center text-[12px] nm:text-[20px] px-10">
          Una comunidad para expresarse y liberar
          {' '}
          <br />
          todo arte de tu espíritu.
        </p1>
        <button className="mt-4 bg-[#9A2AFC] text-white rounded-2xl font-kanit uppercase font-bold px-6 py-2 text-[10px] nm:text-[20px]">conocer más</button>
      </div>
      <div className="absolute mt-[22rem] mr-[20rem] ">
        <Image src={images.libera1} width={88} height={111} className="absolute mt-[12rem]" />
      </div>
      <div className="absolute mt-[26rem] ">
        <Image src={images.libera2} width={209} height={281} className="absolute mt-[12rem]" />
      </div>
      <div className="absolute mt-[22rem] ml-[20rem] overflow-visible ">
        <Image src={images.libera3} width={91} height={126} className="absolute mt-[12rem]" />
      </div>
    </div>
  );
}

export default Header;
