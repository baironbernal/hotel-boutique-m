import Link from 'next/link'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#080E18] text-white/55 py-17 px-5 md:px-8 lg:px-20 pb-9">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-11 mb-13">
        {/* Brand */}
        <div>
          <div className="mb-4.5">
            <span className="font-serif text-2xl font-medium text-white/90 tracking-wide">
              Hotel M Boutique
            </span>
          </div>
          <p className="text-[0.83rem] leading-relaxed max-w-[250px]">
            Un santuario intimo en el corazon de Colombia, donde cada estancia es una historia digna de contar.
          </p>
          <p className="font-serif italic text-[0.88rem] text-[#0E79BD] mt-2.5">
            Pequenos Hoteles con Encanto
          </p>
          <div className="flex gap-2.5 mt-5.5">
            <Link
              href="#"
              className="w-[34px] h-[34px] border border-white/14 rounded-full flex items-center justify-center text-white/50 hover:border-[#1559A6] hover:text-[#0E79BD] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-[34px] h-[34px] border border-white/14 rounded-full flex items-center justify-center text-white/50 hover:border-[#1559A6] hover:text-[#0E79BD] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="w-[34px] h-[34px] border border-white/14 rounded-full flex items-center justify-center text-white/50 hover:border-[#1559A6] hover:text-[#0E79BD] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hotel Links */}
        <div>
          <h4 className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white mb-4.5">
            Hotel
          </h4>
          <ul className="list-none space-y-2.5">
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Nuestra Historia
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Habitaciones & Suites
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Restaurante
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Spa & Bienestar
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Rooftop & Piscina
              </Link>
            </li>
          </ul>
        </div>

        {/* Guest Links */}
        <div>
          <h4 className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white mb-4.5">
            Huespedes
          </h4>
          <ul className="list-none space-y-2.5">
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Hacer Reserva
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Paquetes Especiales
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Politica de Cancelacion
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[0.82rem] hover:text-[#0E79BD] transition-colors duration-300">
                Tarjetas de Regalo
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-white mb-4.5">
            Contacto
          </h4>
          <address className="not-italic text-[0.83rem] leading-[2.1]">
            Colombia
            <br />
            +57 (1) 000 0000
            <br />
            hola@hotelmb.co
            <br />
            Check-in: 3:00 PM
            <br />
            Check-out: 12:00 PM
          </address>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/7 pt-6.5 flex flex-col md:flex-row items-center justify-between gap-3.5 text-center md:text-left">
        <p className="text-[0.75rem]">
          &copy; 2026 Hotel M Boutique. Todos los derechos reservados.
        </p>
        <div className="flex gap-2.5">
          <span className="px-3 py-1.5 border border-white/10 rounded-sm text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/35">
            TripAdvisor 5&#9733;
          </span>
          <span className="px-3 py-1.5 border border-white/10 rounded-sm text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/35">
            Booking 9.6
          </span>
          <span className="px-3 py-1.5 border border-white/10 rounded-sm text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/35">
            Verified Hotel
          </span>
        </div>
      </div>
    </footer>
  )
}
