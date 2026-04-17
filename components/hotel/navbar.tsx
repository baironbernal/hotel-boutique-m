"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflowY = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflowY = '' }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#experience', label: 'Nosotros' },
    { href: '#rooms', label: 'Habitaciones' },
    { href: '#amenities', label: 'Servicios' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#reviews', label: 'Resenas' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[65] transition-all duration-400 ${
          scrolled
            ? 'bg-dark/97 py-3.5 shadow-[0_2px_28px_rgba(0,0,0,0.25)]'
            : 'bg-transparent py-5'
        } px-5 md:px-8 lg:px-15`}
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo ITE" width={100} height={100} priority />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 lg:gap-8 items-center list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium tracking-[0.14em] uppercase text-white/80 hover:text-[#0E79BD] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#booking"
                className="px-6 py-2.5 bg-[#1559A6] text-white text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-[#0E79BD] transition-colors duration-300"
              >
                Reservar
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Overlay — slides in from the left, above the nav */}
      <div
        className={`fixed inset-0 z-[70] bg-dark flex flex-col md:hidden
          transition-[transform,visibility] duration-500 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0 visible' : '-translate-x-full invisible'}`}
      >
        {/* Top bar: logo + close button */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <Image src="/images/logo.png" alt="Logo ITE" width={80} height={80} />
          <button
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mx-5" />

        {/* Centered nav links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <ul className="flex flex-col items-center gap-6 list-none w-full px-8">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={`w-full text-center transition-all duration-500
                  ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: mobileMenuOpen ? `${120 + i * 70}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  className="font-serif text-[1.35rem] font-medium text-white/80 hover:text-[#0E79BD] transition-colors duration-300 tracking-wide block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-8 transition-all duration-500
              ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: mobileMenuOpen ? `${120 + navLinks.length * 70}ms` : '0ms' }}
          >
            <Link
              href="#booking"
              className="px-12 py-4 bg-[#1559A6] text-white text-sm font-semibold tracking-[0.14em] uppercase rounded-sm hover:bg-[#0E79BD] transition-colors duration-300 block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reservar Ahora
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="flex justify-center px-5 pb-10">
          <p className="font-serif italic text-sm text-[#0E79BD]/60 tracking-wide">
            Pequeños Hoteles con Encanto
          </p>
        </div>
      </div>
    </>
  )
}
