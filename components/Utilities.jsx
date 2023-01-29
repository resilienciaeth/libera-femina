import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import images from '../public/assets';
import Carouselmb from './Carouselmb';
import Carouseldk from './Carouseldk';
import { NextButton, PrevButton } from './EmblaCarouselDotsButtons';

const OPTIONS = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Utilities(props) {
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
          <Carouselmb slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
      <div className="hidden nm:flex h-[110vh] nm:flex-row items-center justify-center">
        <div className="w-[40%]">
          <div className="ml-[2rem]">
            <Image src={images.art1} />
          </div>
        </div>

        <div className="w-[60%] px-10 flex items-center justify-center">
          <Carouseldk slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}

export default Utilities;
