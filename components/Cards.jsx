import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Cards() {
  return (
    <div className="relative mt-10">
      <div className="mt-20 relative  mb-20">
        <Image src={images.card} objectFit="fill" className="opacity-50" />
        <div className="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 top-[30%]">
          <p className="text-center text-[12px] nm:text-[70px] font-nesatho text-libera-2">LIBERA FEMINA</p>
          <h1 className="font-nesatho px-4 text-[18px] nm:text-[28px] text-center text-white">Cada pieza representa todas las versiones que hemos sido</h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
