import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import comment01 from '../../assets/testimonials/WhatsApp Image 2025-07-15 at 16.34.50 (1).jpeg'
import comment02 from '../../assets/testimonials/WhatsApp Image 2025-07-17 at 17.15.08.jpeg'
import comment03 from '../../assets/testimonials/WhatsApp Image 2025-07-15 at 16.34.50.jpeg'
import comment04 from '../../assets/testimonials/WhatsApp Image 2025-07-15 at 16.48.00.jpeg'
import GlowEffect from './glowEffect/glowEffec';
import GlowNoEffect from './glowEffect/glowNoEffect';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useTriggerResize } from '../../../context/triggerResize';
const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    avatar: comment01,
    rating: 5,
    comment: "Excelente trabalho! Meu site ficou incrível e já estou recebendo mais clientes. O atendimento foi perfeito e a entrega foi no prazo prometido.",
    business: "Salão de Beleza",
    date: "há 2 semanas"
  },
{
    id: 2,
    name: "Ana Costa",
    avatar: comment02,
    rating: 5,
    comment: "Profissionais competentes e criativos. Entenderam perfeitamente minha visão e criaram um site que reflete a qualidade do meu trabalho.",
    business: "Arquitetura",
    date: "há 3 semanas"
  },
  {
    id: 3,
    name: "Ana Costa",
    avatar: comment03,
    rating: 5,
    comment: "Profissionais competentes e criativos. Entenderam perfeitamente minha visão e criaram um site que reflete a qualidade do meu trabalho.",
    business: "Arquitetura",
    date: "há 3 semanas"
  },
  {
    id: 4,
    name: "Ana Costa",
    avatar: comment04,
    rating: 5,
    comment: "Profissionais competentes e criativos. Entenderam perfeitamente minha visão e criaram um site que reflete a qualidade do meu trabalho.",
    business: "Arquitetura",
    date: "há 3 semanas"
  }
];

const TestimonialsSection = () => {
  const { inneWidth } = useTriggerResize()
  const [correctWidth, setCorrectWidth] = useState<number>(0)
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    setCorrectWidth(window.innerWidth)
  }, [inneWidth])
  return (
    <section className="min-h-dvh md:py-20 py-10 bg-bgPrimary overflow-hidden">
      <div className='bg-lines  h-full w-full absolute '>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="md:text-xl text-white max-w-3xl mx-auto">
            Mais de 50 empresários já transformaram seus negócios com nossos sites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        </div>
        <div className="relative select-none md:scale-100 scale-125 px-2">
          <Swiper
            slidesPerView={correctWidth > 700 ? 3 : 1}
            spaceBetween={30}
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
            modules={[ Pagination, Navigation, Autoplay]}
            className="mySwiper h- "
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide className=''>
                <Card key={testimonial.id} className=" md:max-w-80 max-w-52 w-full mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 overflow-hidden">
                  <CardContent className="p-6">
                    {/* Google Maps style header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className=" object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className='max-w-[200px] max-h-[20] mx-auto'>
            <GlowNoEffect />
          </div>
          <div className="inline-flex items-center space-x-8 border bg-bgPrimary rounded-2xl z-20   relative px-8 py-4">
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left ">
                <div className="font-semibold text-white">5.0</div>
                <div className="text-sm text-white">avaliação média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
