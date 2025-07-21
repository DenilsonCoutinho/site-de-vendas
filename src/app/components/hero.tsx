import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Clock, Trophy } from 'lucide-react';
import mockup from '../../assets/hero/iPhone 13 Pro.png'
import pessoas from '../../assets/hero/pessoas.webp'
import gsap from 'gsap';
import Image from 'next/image';
const Hero = () => {

    function toWhatssap() {
        window.open(
            'https://wa.me/5519989332087?text=olá, gostaria de falar com um progamador',
            '_blank'
        );
    }

    return (
        <section className="relative md:min-h-dvh min-h-dvh bg-hero overflow-hidden">
            <div className='max-w-[1200px] m-auto flex md:flex-row flex-col items-end justify-evenly  px-2'>
                <div className='max-w-[590px] md:pt-40 pt-10 flex flex-col gap-10'>
                    <h1 className='fade-in md:text-5xl text-3xl text-white md:text-left text-center font-bold md:leading-14 leading-10'>
                        <span className='text-surface '> Landing pages e sites</span>{"\n"}
                        para produtos digitais,
                        serviços e empresas
                    </h1>

                    <Button onClick={() => toWhatssap()} className='p-7 cursor-pointer fade-in bg-surface hover:bg-surface hover:brightness-150 shadow-lg shadow-bgPrimary buttonShadow'>QUERO UM ORÇAMENTO AGORA</Button>
                    <div className='flex md:flex-row fade-in flex-col md:justify-start justify-center gap-4 items-center '>
                        <Image src={pessoas} alt='mockup' width={160} quality={100} className='' />
                        <p className='text-white text-sm  font-bold'>
                            +50 clientes satisfeitos
                        </p>
                    </div>

                </div>
                <Image src={mockup} alt='mockup' width={360} height={500} quality={100} className='md:translate-y-16 md:pt-0 pt-10' />
            </div>
        </section>
    );
};
export default Hero;
