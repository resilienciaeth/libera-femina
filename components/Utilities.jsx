import React from 'react';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function Utilities() {
  return (
    <div className="mt-20 nm:mt-32">
      <div className="nm:px-32 ">
        <div className="px-10 mt-6">
          <div className="flex flex-row items-center justify-center space-x-6">
            <BsArrowLeft className="text-[#EEEEF2] opacity-40" size={50} />
            <BsArrowRight className="text-[#940FF7]" size={50} />
          </div>
          <div className="bg-[#4B365D] px-6 rounded-lg mt-6 h-[60vh] nm:h-[17vh] nm:flex nm:flex-row nm:justify-around nm:items-center nm:space-x-32">
            <div className="flex py-10 flex-col space-y-4 ">
              <h1 className="text-white text-[18px] font-nesatho text-center font-bold">
                01. CURSOS CREATIVOS PARA
                {' '}
                <br />
                <span className="text-libera-2">DESPERTAR TU ARTE</span>
              </h1>
              <p className="text-[10px] px-2 text-center text-white">Este será un ámbito de aprendizaje, KA’ LARRAZA y Malicia ofrecerán cursos de arte visual y auditiva. Los talleres de creatividad explotaran tu alma artística, podrás aprender todo lo siguiente:</p>
              <ul className="flex flex-col items-start ml-3 text-left font-kanit text-white">
                <li className="text-[17px]">Ilustración digital en Procreate.</li>
                <li>Taller de creatividad.</li>
                <li>Dibujo básico.</li>
                <li>Blackwork Tatuaje.</li>
                <li>Conceptualización y Diseño de tatuaje consciente.</li>
                <li>Arte Sistémico.</li>
                <li>Taller de autoretrato.</li>
                <li>Cómo comenzar a hacer música.</li>
                <li>Composición musical.</li>
                <li>Cómo mezclar música.</li>
                <li>Cómo vivir del arte.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
