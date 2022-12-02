import React from 'react';
import Image from 'next/image';

import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import images from '../public/assets';

function Creators() {
  return (
    <div className=" bg-libera-1 nm:h-[80vh] nm:flex nm:flex-row">
      <div className="items-center flex flex-col nm:w-[40%] justify-center">
        <h1 className="text-[18px] nm:text-[70px] text-white font-nesatho font-bold text-center nm:text-left leading-[40px] nm:leading-[70px] uppercase">
          Hablemos de este
          {' '}
          <span className="text-[#9A2AFC]">team:</span>
        </h1>
        <p className="text-white text-center font-kanit text-[12px] mt-4 px-10">
          Este equipo es el fruto de la conexión entre dos mujeres que se encuentran fluyendo en una constante introspección y reconstrucción, no creen que sea posible determinar quiénes “son” en forma definitiva.
        </p>
        <p className="text-white text-center font-kanit text-[12px] mt-4 px-10">
          Sin embargo aquí podrán conocer su espíritu:
        </p>
      </div>
      <div className="nm:flex nm:flex-row nm:w-[60%] nm:items-center nm:justify-center">
        <div className="px-[4rem] nm:px-0 mt-10">
          <div className="flex flex-col py-4">
            <div>
              <Image src={images.ka} />
            </div>
            <div className="mt-4 flex flex-col justify-start">
              <div className="flex flex-col justify-start items-center">
                <h1 className="text-left font-bold text-white font-nesatho text-[18px]">KA LARRAZA</h1>
                <p className="text-white opacity-[0.5] text-center font-kanit text-[12px]">
                  Es amante del arte y logró hacer de su estilo de vida un trabajo. Su conexión con el arte es tan profunda que siente cuando las formas le hablan, cuando las imágenes la encuentran, y después de darles un paso por su conciencia, las materializa en gráfico.
                </p>
              </div>
              <div className="flex flex-row justify-center mt-6">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-white" size={20} onClick={() => window.open('https://www.instagram.com/')} />
                  <SlSocialTwitter className="text-white" size={20} onClick={() => window.open('https://twitter.com/')} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[4rem] nm:px-0 mt-10">
          <div className="flex flex-col py-4">
            <div>
              <Image src={images.malicia} />
            </div>
            <div className="mt-4 flex flex-col justify-start">
              <div className="flex flex-col justify-start items-center">
                <h1 className="text-left font-bold text-white font-nesatho text-[18px]">DOC MALICIA</h1>
                <p className="text-white opacity-[0.5] text-center font-kanit text-[12px]">
                  Es una mujer sociable, curiosa y versátil que sabe desplazarse simultáneamente por el mundo intelectual y artístico. Su curiosidad la llevó a abordar niveles de estudios muy elevados, pero su sensibilidad la vinculó profundamente con el mundo de la música.
                </p>
              </div>
              <div className="flex flex-row justify-center mt-6 pb-20">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-white" size={20} onClick={() => window.open('https://www.instagram.com/')} />
                  <SlSocialTwitter className="text-white" size={20} onClick={() => window.open('https://twitter.com/')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creators;
