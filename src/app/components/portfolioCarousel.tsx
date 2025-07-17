"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import teclado from '@/assets/teclado-laptop-demonstration.png'
import tela_gisele from '@/assets/build-notebook/giseleTerapeu/tela-laptop-gisele.png'
import tela from '@/assets/build-notebook/sleepStore/tela-laptop-demonstration.png'
import tela_allan from '@/assets/build-notebook/allanBelli/tela-laptop-allan.png'
import politeia from '@/assets/build-notebook/politeia/tela-laptop-politeia.png'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import GlowEffect from './glowEffect/glowEffec';
import { useTriggerResize } from '../../../context/triggerResize';

interface PortfolioCarouselProps {
  title: string;
  subtitle?: string;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ title, subtitle }) => {
  const containerRef = useRef(null);
  const screenRef = useRef<HTMLImageElement>(null);
  const glowEffectRef = useRef<HTMLImageElement>(null);
  const { inneWidth } = useTriggerResize()
  const [correctWidth, setCorrectWidth] = useState<number>(0)
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setCorrectWidth(window.innerWidth)
  }, [inneWidth])
  useGSAP(() => {
  gsap.fromTo(
      ".animatedText",
      { opacity: 0,y:80 },
      {
        opacity: 1,
        y:0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=400",
          end: "+=50",
        },

        ease: 'sine.inOut',
      }
    );

    if (!screenRef.current) return;

    gsap.fromTo(
      screenRef.current,
      { rotateX: -70, transformOrigin: 'bottom center' },
      {
        rotateX: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=130",
          end: "+=10",
          scrub: 1.4,
        },

        ease: 'sine.inOut',
      }
    );

    gsap.fromTo(
      glowEffectRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=130",
          end: "+=50",
          scrub: 1.4,
        },

        ease: 'sine.inOut',
      }
    );
  }, []);


  return (
    <section ref={containerRef} className="py-20  bg-bgPrimary overflow-hidden relative">
      <div className='bg-lines  h-full w-full absolute '>
      </div>
      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animatedText">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white max-w-3xl mx-auto animatedText">
              {subtitle}
            </p>
          )}
        </div>

        <div ref={glowEffectRef} className="relative glowEffect md:max-w-[600px]  max-w-[200px] mx-auto">
          <GlowEffect />
        </div>

        <div className="flex flex-col md:scale-100 scale-125 items-center justify-center relative perspective-[1200px] ">
          <Image
            ref={screenRef}
            src={tela}
            alt="Tela do notebook"
            width={600}
            className="  z-10"
          />
          <Image
            src={teclado}
            alt="Teclado do notebook"
            width={600}
            className=" relative z-0"
          />
        </div>

        <div className="relative select-none md:scale-100 scale-125">
          <Swiper
            slidesPerView={correctWidth > 700 ? 2 : 1}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={(swiper, time, progress) => {
              if (progressCircle.current) {
                progressCircle.current.style.setProperty('--progress', String(1 - progress));
              }

              if (progressContent.current) {
                progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
              }
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className="mySwiper md:h-80 h- mt-32"
          >
            <SwiperSlide className=' w-80'><div className="flex flex-col items-center justify-center relative perspective-[1200px] ">
              <Image
                quality={100}
                src={tela_gisele}
                alt="tela_gisele"
                width={600}
                className="  z-10"
              />
              <Image
                quality={100}
                src={teclado}
                alt="Teclado do notebook"
                width={600}
                className=" relative z-0"
              />
            </div>
            </SwiperSlide>
            <SwiperSlide className=' h-80 w-80'><div className="flex flex-col items-center justify-center relative perspective-[1200px] ">
              <Image
                quality={100}
                src={tela_allan}
                alt="tela_allan"
                width={600}
                className="  z-10"
              />
              <Image
                quality={100}
                src={teclado}
                alt="Teclado do notebook"
                width={600}
                className=" relative z-0"
              />
            </div>
            </SwiperSlide>
            <SwiperSlide className=' h-80 w-80'><div className="flex flex-col items-center justify-center relative perspective-[1200px] ">
              <Image
                quality={100}
                src={politeia}
                alt="Tela do notebook"
                width={600}
                className="  z-10"
              />
              <Image
                quality={100}
                src={teclado}
                alt="Teclado do notebook"
                width={600}
                className=" relative z-0"
              />
            </div>
            </SwiperSlide>
            <SwiperSlide className=' h-80 w-80'><div className="flex flex-col items-center justify-center relative perspective-[1200px] ">
              <Image
                quality={100}
                src={tela}
                alt="Tela do notebook"
                width={600}
                className="  z-10"
              />
              <Image
                quality={100}

                src={teclado}
                alt="Teclado do notebook"
                width={600}
                className=" relative z-0"
              />
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;