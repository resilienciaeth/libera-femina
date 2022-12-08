import React from 'react';
import Image from 'next/image';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import images from '../public/assets';

function Utilities() {
  return (
    <div className="mt-20 ">
      <div className="nm:hidden">
        <div className="px-10 mt-6">
          <div className="hidden nm:flex items-center justify-center">
            <h1 className="text-[50px] font-nesatho text-white">
              LOS
              {' '}
              <span className="text-libera-2">BENEFICIOS</span>
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center space-x-6">
            <BsArrowLeft className="text-[#EEEEF2] opacity-40" size={50} />
            <BsArrowRight className="text-[#940FF7]" size={50} />
          </div>
          <div className="bg-[#4B365D] px-6 rounded-lg mt-6 h-[50vh]">
            <div className="flex py-10 flex-col space-y-4 ">
              <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                01. CURSOS CREATIVOS PARA
                {' '}
                <br />
                <span className="text-libera-2">DESPERTAR TU ARTE</span>
              </h1>
              <p className="text-[10px] md:text-[14px]  px-2 md:px-10 text-center text-white ">Este será un ámbito de aprendizaje, KA’ LARRAZA y Malicia ofrecerán cursos de arte visual y auditiva. Los talleres de creatividad explotaran tu alma artística, podrás aprender todo lo siguiente:</p>
              <ul className="flex flex-col items-start ml-3 text-left font-kanit text-white">
                <li>
                  1. Dibujo Básico
                </li>
                <li>2. Dibuja en Procreate</li>
                <li>3. Ilustración Consciente</li>
                <li>4. Mezcla música</li>
                <li>5. Dibujo para Tatuaje</li>
                <li>6. ¿Cómo empezar a tatuar?</li>
                <li>7. Estilos tatuaje</li>
                <li>8. Teoría musical para producción</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden nm:flex h-[110vh] nm:flex-row items-center justify-center">
        <div className="w-[35%]">
          <div className="ml-[2rem]">
            <Image src={images.art1} />
          </div>
        </div>
        <div className="w-[65%] px-10 flex items-center justify-center">
          <div className="ml-[2rem]">
            <h1 className="text-white text-[70px] font-nesatho">
              LOS
              {' '}
              <span className="text-libera-2">BENEFICIOS:</span>
            </h1>
            <div className="bg-[#4B365D] rounded-3xl max-w-[800px]">
              <div className="px-10 py-10">
                <div>
                  <h1 className="text-[30px] text-white font-nesatho">
                    01. CURSOS CREATIVOS PARA
                    {' '}
                    <br />
                    {' '}
                    <span className="text-libera-2">DESPERTAR TU ARTE</span>
                  </h1>
                </div>
                <p className="text-[17px] font-kanit text-white mt-6">Este será un ámbito de aprendizaje, KA’ LARRAZA y Malicia ofrecerán cursos de arte visual y auditiva. Los talleres de creatividad explotaran tu alma artística, podrás aprender todo lo siguiente:</p>
                <div className="flex flex-row font-kanit space-x-16 text-white text-[24px] mt-10">
                  <ul className="space-y-4">
                    <li>1. Dibujo Básico</li>
                    <li>3. Ilustración Consciente</li>
                    <li>5. Dibujo para Tatuaje</li>
                    <li>7. Estilos tatuaje</li>
                  </ul>
                  <ul className="space-y-4">
                    <li>2. Dibuja en Procreate</li>
                    <li>4. Mezcla música</li>
                    <li>6. ¿Cómo empezar a tatuar?</li>
                    <li>8. Teoría musical para producción</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-20 space-x-6">
              <BsArrowLeft className="text-[#EEEEF2] opacity-40" size={50} />
              <BsArrowRight className="text-[#940FF7]" size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
