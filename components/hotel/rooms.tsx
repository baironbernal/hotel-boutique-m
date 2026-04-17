"use client"

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/use-fade-in'

const rooms = [
  {
    name: 'Suite Deluxe',
    features: 'Vista Montana · King Bed · Balcon',
    image: '/images/Hotel-mediterraneo-01-1.jpeg',
    alt: 'Suite Deluxe con vista a la montana',
  },
  {
    name: 'Habitacion Garden View',
    features: 'Vista Jardin · Queen Bed · A/C',
    image: '/images/Hotel-mediterraneo-02-1.jpeg',
    alt: 'Habitacion Garden View con vista al jardin',
  },
  {
    name: 'Experiencia Spa',
    features: 'Masajes · Vista Panoramica · Parejas',
    image: '/images/Hotel-mediterraneo-09-1.jpeg',
    alt: 'Spa y bienestar con vista panoramica',
  },
]

export function Rooms() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeIn(sectionRef)

  return (
    <section ref={sectionRef} id="rooms" className="bg-cream py-14 md:py-24 px-5 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <span className="fade-in text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
          Habitaciones & Suites
        </span>
        <h2 className="fade-in font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-[#1559A6]">
          Espacios disenados para el <em className="italic text-[#0E79BD]">descanso perfecto</em>
        </h2>
        <div className="w-11 h-0.5 bg-[#1559A6] mt-4 mx-auto" />
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {rooms.map((room, index) => (
          <div
            key={room.name}
            className={`fade-in ${index === 1 ? 'fade-in-delay-1' : index === 2 ? 'fade-in-delay-2' : ''} relative overflow-hidden cursor-pointer group`}
          >
            <Image
              src={room.image}
              alt={room.alt}
              width={600}
              height={340}
              className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover transition-transform duration-600 ease-out group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/78 to-transparent flex flex-col justify-end p-6 md:p-7">
              <div className="font-serif text-xl font-medium text-white mb-1.5">
                {room.name}
              </div>
              <div className="text-xs font-medium tracking-[0.1em] uppercase text-white/70 mb-4">
                {room.features}
              </div>
              <Link
                href="#booking"
                className="inline-block px-5 py-2.5 border border-white/50 text-white text-xs font-semibold tracking-[0.1em] uppercase rounded-sm w-fit hover:bg-[#1559A6] hover:border-[#1559A6] transition-all duration-300"
              >
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
