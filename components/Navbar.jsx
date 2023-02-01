import React, { useState } from 'react';

import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';

import images from '../public/assets';

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="flex font-creato justify-between items-center nm:h-24 h-14 px-4 ">
        <div className="flex md:hidden">
          <Image src={images.logo} width={66} height={12} />
        </div>
        <div className="hidden md:flex ml-10">
          <Image src={images.logo} width={100} height={30} />
        </div>
        <ul className="hidden text-white font-bold font-nesatho md:flex nm:mr-10 space-x-[4rem] text-[12px]">
          <div onClick={() => window.open('https://nakedmeta.notion.site/LIBERA-F-MINA-cc2926e6cdbe473c9ae5945c3240af43')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:text-gray-500 duration-[600ms]">
            <li className="p-2 ">FAQ</li>
          </div>
          <div onClick={() => window.open('https://www.instagram.com/libera_femina')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:text-gray-500 duration-[600ms]">
            <li className="p-2 ">INSTAGRAM</li>
          </div>

          <div onClick={() => window.open('/liberate')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:text-gray-500 duration-[600ms]">
            <li className="p-2 cursor-pointer">OBTENER COLECCIONABLE</li>
          </div>
        </ul>
        <div className="cursor-pointer z-20 flex md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        <div className={!nav ? 'fixed md:hidden bg-libera-1 left-0 top-0 w-full z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-200%]'}>
          <div className="mt-10 px-6">
            <Image src={images.logo} width={200} height={100} />
          </div>
          <ul className="pt-16 px-10 flex flex-col md:hidden uppercase font-nesatho font-bold">
            <li onClick={() => window.open('https://nakedmeta.notion.site/LIBERA-F-MINA-cc2926e6cdbe473c9ae5945c3240af43')} className="p-4 text-[18px]">FAQ</li>
            <li onClick={() => window.open('https://www.instagram.com/libera_femina')} className="p-4 text-[18px]">INSTAGRAM</li>
            <li onClick={() => window.open('/liberate')} className="p-4 text-[18px]">OBTENER COLECCIONABLE</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
