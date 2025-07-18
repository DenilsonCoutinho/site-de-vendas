import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingDown, Users, Zap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import gsap from 'gsap'; // <-- import GSAP

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const ProvocativeSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animatedText2",
      { opacity: 0, y: 120 },
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

    gsap.fromTo(
      ".animatedBox",
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=100",
          end: "+=50",
        },

        ease: 'sine.inOut',
      }
    );
  }, []);



  return (
    <section ref={containerRef} className=" bg-bgPrimary relative overflow-hidden">
      <div className='bg-lines  h-full w-full absolute '>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main provocative headline */}
          <h2 className="text-2xl animatedText2 md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ainda tá achando que só o{' '}
            <span className="line-through animatedText text-white/60">Instagram</span>{' '}
            resolve?
          </h2>

          <p className="text-xl animatedText2 md:text-2xl text-red-100 mb-8 font-medium">
            Vai continuar perdendo venda pra concorrente com site?
          </p>

          {/* Stats that hurt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animatedBox">
              <TrendingDown className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">73%</div>
              <div className="text-red-100 text-sm">
                dos clientes desistem se não acham seu site
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animatedBox" >
              <Users className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">89%</div>
              <div className="text-red-100 text-sm">
                preferem empresas com presença digital completa
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animatedBox">
              <Zap className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">3x</div>
              <div className="text-red-100 text-sm">
                mais vendas com site profissional
              </div>
            </div>
          </div>

          {/* Provocative statements */}
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white text-lg">
                  <strong>Seu concorrente já tem site</strong> e está capturando os clientes que deveriam ser seus
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white text-lg">
                  <strong>Redes sociais não são suficientes</strong> - você precisa de um hub central para seu negócio
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-white text-lg">
                  <strong>Cada dia sem site</strong> é dinheiro deixado na mesa
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center pb-14">
            <p className="text-red-100 text-xl mb-6 font-medium">
              Pare de perder clientes para quem se levou a sério
            </p>
            <Button className='p-7 tilt-in-top-1 bg-surface hover:bg-surface hover:brightness-150 shadow-lg shadow-bgPrimary buttonShadow'>QUERO UM ORÇAMENTO AGORA</Button>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-red/10 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default ProvocativeSection