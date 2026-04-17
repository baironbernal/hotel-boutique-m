"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageViewerProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageViewer({ images, currentIndex, onClose, onNavigate }: ImageViewerProps) {
  const total = images.length

  const prev = () => onNavigate((currentIndex - 1 + total) % total)
  const next = () => onNavigate((currentIndex + 1) % total)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="viewer-fade-in fixed inset-0 z-[100] bg-[#070D18]/96 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Counter */}
      <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-white/35">
        {currentIndex + 1} / {total}
      </span>

      {/* Close */}
      <button
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      {total > 1 && (
        <button
          className="absolute left-3 md:left-7 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Anterior"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-[92vw] h-[75vh] md:w-[82vw] md:h-[84vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain pointer-events-none select-none"
          sizes="(max-width: 768px) 92vw, 82vw"
          priority
        />
      </div>

      {/* Next */}
      {total > 1 && (
        <button
          className="absolute right-3 md:right-7 w-11 h-11 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Siguiente"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Caption */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/30 tracking-wide text-center max-w-[80vw] font-light">
        {images[currentIndex].alt}
      </p>
    </div>
  )
}
