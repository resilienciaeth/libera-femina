import React, { useState } from 'react';

import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

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
        <ul className="hidden text-white font-bold font-nesatho md:flex nm:mr-10 space-x-[4rem] text-[15px]">
          <div onClick={() => window.open('')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <li className="p-2 ">LIBRO BLANCO</li>
          </div>
          <div onClick={() => window.open('')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <li className="p-2 cursor-pointer">ADQUIERE TU COLECCIONABLE</li>
          </div>
        </ul>
        <div className="cursor-pointer z-20 flex md:hidden" onClick={handleNav} onKeyPress={handleNav}>
          {!nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        <div className={!nav ? 'fixed md:hidden bg-white left-0 top-0 w-full z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-200%]'}>
          <div className="mt-10 px-6">
            <Image src={images.logo} width={200} height={100} />
          </div>
          <ul className="pt-16 px-10 flex flex-col md:hidden uppercase font-nesatho font-bold">
            <li onClick={() => window.open('')} className="p-4 text-[30px]">LIBRO BLANCO</li>
            <li onClick={() => window.open('')} className="p-4 text-[18px]">ADQUIERE TU COLECCIONABLE</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
