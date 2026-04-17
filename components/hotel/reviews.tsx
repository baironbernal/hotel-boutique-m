"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { useFadeIn } from '@/hooks/use-fade-in'

const reviews = [
  {
    text: '"Desde el momento en que llegamos, sentimos que el hotel entero habia sido preparado solo para nosotros. El nivel de atencion al detalle es incomparable."',
    author: 'Sophie Dubois',
    origin: 'Paris, Francia',
    avatar: 'https://i.pravatar.cc/100?img=47',
    platform: 'Booking.com',
  },
  {
    text: '"La suite fue impresionante — las sabanas, la iluminacion, la vista. El staff recordaba nuestros nombres desde la primera manana. Ya reservamos nuestro regreso."',
    author: 'Marco Rossi',
    origin: 'Milan, Italia',
    avatar: 'https://i.pravatar.cc/100?img=12',
    platform: 'TripAdvisor',
  },
  {
    text: '"El rooftop de noche es pura magia. Las bugambilias iluminando la piscina con las luces de la ciudad de fondo — una imagen que no se olvida. Volveremos siempre."',
    author: 'Elena Vargas',
    origin: 'Bogota, Colombia',
    avatar: 'https://i.pravatar.cc/100?img=32',
    platform: 'Google',
  },
]

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  useFadeIn(sectionRef)

  return (
    <section ref={sectionRef} id="reviews" className="bg-navy py-14 md:py-24 px-5 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
          Experiencias de Huespedes
        </span>
        <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-white">
          Lo que dicen <em className="italic text-[#0E79BD]">nuestros huespedes</em>
        </h2>
        <div className="w-11 h-0.5 bg-[#0E79BD] mt-4 mx-auto" />
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <div
            key={review.author}
            className={`fade-in ${index === 1 ? 'fade-in-delay-1' : index === 2 ? 'fade-in-delay-2' : ''} bg-white/5 border border-white/8 rounded-sm p-7 md:p-9 transition-all duration-300 hover:border-[#0E79BD]/40 hover:bg-[#0E79BD]/7`}
          >
            <div className="text-[#0E79BD] text-sm tracking-[3px] mb-5">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="font-serif text-base italic leading-relaxed text-white/82 mb-7">
              {review.text}
            </p>
            <div className="flex items-center gap-3.5">
              <Image
                src={review.avatar}
                alt={review.author}
                width={42}
                height={42}
                className="rounded-full object-cover border-2 border-[#0E79BD]/50 shrink-0"
              />
              <div className="min-w-0">
                <div className="font-semibold text-sm text-white truncate">
                  {review.author}
                </div>
                <div className="text-xs text-white/45 mt-0.5 truncate">
                  {review.origin}
                </div>
              </div>
              <span className="ml-auto shrink-0 bg-white/7 border border-white/10 rounded-sm px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/40">
                {review.platform}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
