"use client"

import { useRef } from 'react'
import { Waves, Coffee, Shield, Globe, Monitor, Home } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const amenities = [
  {
    icon: Waves,
    name: 'Rooftop & Piscina',
    description: 'Terraza panoramica con piscina y jacuzzi iluminados, vistas de 360 a las montanas y la ciudad. Abierto al atardecer.',
  },
  {
    icon: Coffee,
    name: 'Restaurante',
    description: 'Menu curado que celebra los ingredientes regionales. Desayuno en terraza con vistas. Cenas a la luz de velas en ambiente colonial.',
  },
  {
    icon: Shield,
    name: 'Spa & Bienestar',
    description: 'Sala de tratamientos con vista panoramica. Masajes, faciales y rituales con ingredientes botanicos colombianos. Ideal para parejas.',
  },
  {
    icon: Globe,
    name: 'Concierge 24/7',
    description: 'Servicio personalizado disponible a toda hora. Reservas, transporte, tours y cualquier necesidad durante tu estancia.',
  },
  {
    icon: Monitor,
    name: 'Sala de Eventos',
    description: 'Espacio privado para reuniones corporativas, celebraciones intimas y eventos especiales con servicio de catering incluido.',
  },
  {
    icon: Home,
    name: 'Traslados Premium',
    description: 'Transferes al aeropuerto y ciudad en vehiculos premium. Coordinados con discrecion total y puntualidad garantizada.',
  },
]

export function Amenities() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeIn(sectionRef)

  return (
    <section ref={sectionRef} id="amenities" className="bg-cream py-14 md:py-24 px-5 md:px-8 lg:px-20">
      {/* Header */}
      <div className="max-w-[520px] mb-12 md:mb-16">
        <span className="fade-in text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
          Servicios & Amenidades
        </span>
        <h2 className="fade-in font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-[#1559A6]">
          Todo lo que necesitas,
          <br />
          <em className="italic text-[#0E79BD]">nada</em> de lo que no
        </h2>
        <div className="fade-in w-11 h-0.5 bg-[#1559A6] mt-4 mb-6" />
        <p className="fade-in text-sm leading-relaxed text-[#1559A6]/60 max-w-[520px]">
          Desde nuestra terraza rooftop con piscina panoramica hasta nuestro intimo restaurante, cada experiencia en Hotel M Boutique esta disenada con intencion.
        </p>
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {amenities.map((amenity) => (
          <div
            key={amenity.name}
            className="fade-in bg-white border border-[#1559A6]/10 rounded-sm p-6 md:p-7 transition-all duration-300 hover:border-[#0E79BD]/30 hover:shadow-[0_4px_20px_rgba(14,121,189,0.08)] cursor-default"
          >
            <div className="w-11 h-11 border border-[#0E79BD]/30 rounded-full flex items-center justify-center mb-5">
              <amenity.icon className="w-5 h-5 text-[#0E79BD] stroke-[1.5]" />
            </div>
            <div className="font-serif text-base font-medium text-[#1559A6] mb-2.5">
              {amenity.name}
            </div>
            <div className="text-sm leading-relaxed text-[#1559A6]/50">
              {amenity.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
