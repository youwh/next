import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Children, ReactNode, useEffect, useState } from 'react';
import { ArrowSvg } from '~/ui/svgs/arrow';
import style from './carousel.module.css';

export type CarouselProps = {
  arrowColor: string;
  perPage: number;
  children: ReactNode;
};

const Carousel = ({ arrowColor, perPage, children }: CarouselProps) => {
  const [splideOptions, setSplideOptions] = useState({
    perPage,
    pagination: false,
    gap: 40,
  });

  const [childArray, setChildArray] = useState(Children.toArray(children));

  useEffect(() => {
    setChildArray(Children.toArray(children));
  }, [children]);

  useEffect(() => {
    setSplideOptions((prevOptions) => ({
      ...prevOptions,
      perPage,
    }));
  }, [perPage]);

  return (
    <div className={style['carousel-wrapper']}>
      <Splide options={splideOptions} hasTrack={false} aria-label='...'>
        <SplideTrack>
          {childArray.map((child, index) => (
            <SplideSlide key={'item' + index}>{child}</SplideSlide>
          ))}
        </SplideTrack>
        <div className='container d-flex justify-content-between align-items-center my-4'>
          <div className={`splide__arrows  d-flex align-items-center`}>
            <button className={`splide__arrow--prev ${style.arrow}`}>
              <ArrowSvg color={arrowColor} />
            </button>
            <button className={`splide__arrow--next ${style.arrow}`}>
              <ArrowSvg color={arrowColor} />
            </button>
          </div>
          <div className='text-center '>
            <a href='#' className={style.link}>
              View more jobs
            </a>
          </div>
        </div>
      </Splide>
    </div>
  );
};

export default Carousel;
