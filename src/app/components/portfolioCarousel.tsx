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


import Image from 'next/image';
import GlowEffect from './glowEffect/glowEffec';
import { useTriggerResize } from '../../../context/triggerResize';
import { Button } from '@/components/ui/button';

interface PortfolioCarouselProps {
  title: string;
  subtitle?: string;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ title, subtitle }) => {
  const containerRef = useRef(null);
  const screenRef = useRef<HTMLImageElement>(null);
  const glowEffectRef = useRef<HTMLImageElement>(null);
 

 
  useGSAP(() => {
    gsap.fromTo(
      ".animatedText",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
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

const handleScrollToExamples= () => {
        const contactSection = document.getElementById('examples');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <section ref={containerRef} className="md:py-20 py-10  bg-bgPrimary overflow-hidden relative">
      <div className='bg-lines  '>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animatedText">
            {title}
          </h2>
          {subtitle && (
            <p className="md:text-xl text-white max-w-3xl mx-auto animatedText">
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
        <div className='flex justify-center items-center'>
        <Button onClick={()=>handleScrollToExamples()} className='cursor-pointer p-7 mt-12 max-w-[500px] w-full mx-auto bg-surface hover:bg-surface hover:brightness-150 shadow-lg shadow-bgPrimary buttonShadow'>
          VER PORTFÓLIO
          </Button>
        </div>

        
      </div>
    </section>
  );
};

export default PortfolioCarousel;