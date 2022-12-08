import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Roadmap() {
  return (
    <div className="h-[60vh] nm:h-[90vh] flex items-center justify-center">
      <div className="items-center flex flex-col">
        <h1 className="nm:text-[60px] text-[30px] font-nesatho text-white">Roadmap</h1>
        <p className="text-white font-kanit font-bold text-[12px] nm:text-[20px]">¿Por qué conectar con Libera Femina?</p>
        <p className="text-white font-kanit nm:w-[40%] text-center mt-10 text-[12px] nm:text-[20px]"> Accederás a múltiples cursos, eventos y conectarás con personas como tú. Tendrás un coleccionable digital que luego podrás vender para que este contenido lo utilice otra persona interesada.</p>
        <div className="w-[80%] mt-10">
          <Image src={images.roadmap} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
