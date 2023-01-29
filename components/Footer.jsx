import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import images from '../public/assets';

function Footer() {
  return (
    <div className="bg-[#4C2F67]">
      <div className="flex flex-col items-center ">
        <div className="mt-20 flex items-center flex-col text-white  space-y-10">
          <Image src={images.logo} width={150} height={50} />
          <h1 className="text-[16px] font-nesatho text-center font-bold">ADQUIERE TU COLLECIONABLE</h1>
          <h1 onClick={() => window.open('https://discord.gg/N6272q7rHu')} className="text-[16px] font-nesatho text-center font-bold">ÚNETE A LIBERA</h1>
          <h1 onClick={() => window.open('https://discord.gg/N6272q7rHu')} className="text-[16px] font-nesatho text-center font-bold">FAQ</h1>
        </div>
        <div className="mt-20 text-white">
          <p className="font-kanit text-[10px] pb-14">All rights reserved 2022. Libera Femina and Naked Meta.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
