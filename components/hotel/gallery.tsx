"use client"

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/use-fade-in'
import { ImageViewer } from './image-viewer'
import { ZoomIn } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/03.jpg',
    alt: 'Piscina rooftop con vista panoramica a las montanas',
    gridClass: 'col-span-2 row-span-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3',
  },
  {
    src: '/images/hero.jpeg',
    alt: 'Jacuzzi rooftop con bugambilias y vista a la ciudad',
    gridClass: 'col-span-1 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-2',
  },
  {
    src: '/images/PHOTO-2026-01-09-17-50-31-6.jpg',
    alt: 'Loungers con toallas del hotel y cocteles en terraza',
    gridClass: 'col-span-1 md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-2',
  },
  {
    src: '/images/WhatsApp-Image-2026-01-09-at-9.34.09-AM-2.jpeg',
    alt: 'Restaurante con ambiente calido y velas',
    gridClass: 'col-span-1 md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-3',
  },
  {
    src: '/images/Hotel-mediterraneo-13.jpeg',
    alt: 'Desayuno en terraza con vista a las montanas',
    gridClass: 'col-span-1 md:col-start-9 md:col-end-13 md:row-start-2 md:row-end-3',
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [viewerIndex, setViewerIndex] = useState<number | null>(null)
  useFadeIn(sectionRef)

  return (
    <>
      <section ref={sectionRef} id="gallery" className="bg-dark pt-0">
        {/* Intro */}
        <div className="bg-navy px-5 md:px-8 lg:px-20 py-12 md:py-14 pb-0 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="fade-in text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
              Tour Visual
            </span>
            <h2 className="fade-in font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-white">
              Espacios para <em className="italic text-[#0E79BD]">momentos</em>
              <br />
              extraordinarios
            </h2>
          </div>
          <Link
            href="#"
            className="fade-in text-xs font-semibold tracking-[0.14em] uppercase text-[#0E79BD] border-b border-[#0E79BD] pb-0.5 hover:opacity-70 transition-opacity duration-300"
          >
            Ver galeria completa &rarr;
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="fade-in grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-0.5 p-0.5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen: ${img.alt}`}
              className={`${img.gridClass} overflow-hidden relative cursor-pointer group`}
              onClick={() => setViewerIndex(index)}
              onKeyDown={(e) => e.key === 'Enter' && setViewerIndex(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] pointer-events-none select-none"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay — pointer-events-none so clicks always reach the parent */}
              <div className="pointer-events-none absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 rounded-full border border-white/60 flex items-center justify-center">
                  <ZoomIn className="w-[18px] h-[18px] text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Viewer */}
      {viewerIndex !== null && (
        <ImageViewer
          images={galleryImages}
          currentIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
          onNavigate={setViewerIndex}
        />
      )}
    </>
  )
}
