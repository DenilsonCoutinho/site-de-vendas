'use client'

import Image from 'next/image'
import sleep from '@/assets/examples/sleepStore.png'
import allan_curso from '@/assets/examples/allan-curso 1.png'
import allan_gestor from '@/assets/examples/allan-gestor 1.png'
import politeia from '@/assets/examples/politei.png'
import gisele from '@/assets/examples/gi.png'
import caio from '@/assets/examples/caio 1.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Examples() {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Seleciona apenas os elementos dentro do componente
        const images = gsap.utils.toArray('.image-animated') as HTMLElement[]

        images.forEach((img, i) => {
            gsap.fromTo(
                img,
                { opacity: 0, y: 150 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'circ.out',
                    delay: 0.08 * i,
                    scrollTrigger: {
                        trigger: img,
                        start: "-=400",
                        end: "+=10",
                    },
                }
            )
        })
    }, { scope: containerRef })

    return (
        <div id='examples' className="w-full px-1 py-12 bg-bgPrimary" ref={containerRef}>
            <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2 auto-rows-auto">

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-2">
                    <Image
                        src={sleep}
                        alt="portfolio-sleep"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-2">
                    <Image
                        src={allan_curso}
                        alt="portfolio-allan-curso"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-2">
                    <Image
                        src={allan_gestor}
                        alt="portfolio-allan-gestor"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-1">
                    <Image
                        src={caio}
                        alt="portfolio-caio"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-2">
                    <Image
                        src={politeia}
                        alt="portfolio-politeia"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="image-animated overflow-hidden rounded-xl shadow-md row-span-1">
                    <Image
                        src={gisele}
                        alt="portfolio-gisele"
                        quality={100}
                        placeholder="blur"
                        loading="lazy"
                        className=" w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>
        </div>
    )
}
