import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Carddesktop1 from './Carddesktop1';
import Carddesktop2 from './Carddesktop2';

import { NextButton, PrevButton } from './EmblaCarouselDotsButtons';
import Carddesktop3 from './Carddesktop3';

function Carouseldk(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="ml-[2rem] flex items-center justify-center flex-col">
        <h1 className="text-white text-[70px] font-nesatho">
          LOS
          {' '}
          <span className="text-libera-2">BENEFICIOS:</span>
        </h1>
        <div className="overflow-hidden flex flex-row items-center justify-center embla__viewport" ref={emblaRef}>
          <div className="embla__container space-x-6 nm:space-x-0">
            <Carddesktop1 />
            <Carddesktop2 />
            <Carddesktop3 />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-20 space-x-6">
          <PrevButton className="text-[#EEEEF2] opacity-40" size={50} onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton className="text-[#940FF7]" size={50} onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  );
}

export default Carouseldk;
