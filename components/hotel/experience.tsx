"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { useFadeIn } from '@/hooks/use-fade-in'

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeIn(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-cream grid grid-cols-1 lg:grid-cols-2 gap-0 p-0"
    >
      {/* Image */}
      <div className="relative min-h-[320px] md:min-h-[440px] lg:min-h-[580px]">
        <Image
          src="/images/Hotel-mediterraneo-02-1.jpeg"
          alt="Interior del Hotel M Boutique"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text Content */}
      <div className="px-6 py-12 md:px-10 md:py-16 lg:px-18 lg:py-20 flex flex-col justify-center bg-white">
        <span className="fade-in text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
          Nuestra Historia
        </span>

        <h2 className="fade-in font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-[#1559A6]">
          Donde el diseno encuentra
          <br />
          el <em className="italic text-[#0E79BD]">encanto autentico</em>
        </h2>

        <div className="fade-in w-11 h-0.5 bg-[#1559A6] mt-4 mb-6" />

        <p className="fade-in text-sm leading-relaxed text-hotel-muted max-w-[520px]">
          Hotel M Boutique nacio de una vision singular: crear un espacio que se sienta intimo y profundamente enraizado en el espiritu de Colombia, con la elegancia y el refinamiento que merecen los viajeros mas exigentes.
        </p>

        <p className="fade-in text-sm leading-relaxed text-hotel-muted max-w-[520px] mt-4">
          Cada habitacion, cada rincon, cada detalle es un dialogo entre la calidez colombiana y el diseno boutique de clase mundial.
        </p>

        <div className="fade-in border-l-[3px] border-[#1559A6] pl-5 mt-7 font-serif text-base italic text-hotel-muted leading-relaxed">
          &quot;Pequenos hoteles con encanto — donde la hospitalidad es un arte.&quot;
        </div>

        <div className="fade-in flex gap-9 mt-10">
          <div className="flex flex-col">
            <span className="font-serif text-[2.2rem] font-semibold text-[#1559A6] leading-none">
              4.9
            </span>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-hotel-muted mt-1.5">
              Calificacion
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[2.2rem] font-semibold text-[#1559A6] leading-none">
              5&#9733;
            </span>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-hotel-muted mt-1.5">
              Servicios
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[2.2rem] font-semibold text-[#1559A6] leading-none">
              100%
            </span>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-hotel-muted mt-1.5">
              Personalizado
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
