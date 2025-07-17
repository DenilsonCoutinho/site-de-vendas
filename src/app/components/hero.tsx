import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Trophy } from 'lucide-react';
import mockup from '../../assets/hero/iPhone 13 Pro.png'
import gsap from 'gsap';
import Image from 'next/image';
const Hero = () => {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contato');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
   
    return (
        <section className="relative md:min-h-dvh min-h-dvh bg-hero overflow-hidden">
            <div className='max-w-[1200px] m-auto flex md:flex-row flex-col items-end justify-evenly  px-2'>
                <div className='max-w-[590px] md:pt-40 pt-10 flex flex-col gap-10'>
                    <h1 className='tilt-in-top-1 md:text-5xl text-3xl text-white md:text-left text-center font-bold md:leading-14 leading-10'>
                        <span className='text-surface '> Landing pages e sites</span>{"\n"}
                        para produtos digitais,
                        serviços e empresas
                    </h1>
                    <Button className='p-7 tilt-in-top-1 bg-surface hover:bg-surface hover:brightness-150 shadow-lg shadow-bgPrimary buttonShadow'>QUERO UM ORÇAMENTO AGORA</Button>
                </div>
                <Image src={mockup} alt='mockup' width={360} height={500} className='md:translate-y-16 md:pt-0 pt-10' />
            </div>
        </section>
    );
};
export default Hero;
