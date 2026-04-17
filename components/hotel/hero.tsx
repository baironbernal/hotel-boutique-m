import Link from 'next/link'

export function Hero() {
  return (
    <section className="h-screen min-h-[700px] bg-[url('/images/Hotel-mediterraneo-12-1.jpeg')] bg-center bg-cover bg-no-repeat relative flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/65 via-dark/35 to-dark/75" />

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-[820px]">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white mb-5 flex items-center justify-center gap-3.5">
          <span className="block w-9 h-px bg-[#0E79BD]" />
          Pequenos Hoteles con Encanto
          <span className="block w-9 h-px bg-[#0E79BD]" />
        </p>

        <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.8rem)] font-medium leading-[1.1] mb-6 text-balance">
          Una experiencia que
          <br />
          <em className="italic text-[#0E79BD]">trasciende</em> lo ordinario
        </h1>

        <p className="hidden md:block text-sm md:text-base font-light leading-relaxed text-white/78 mb-11 max-w-[560px] mx-auto">
          Hotel M Boutique es un santuario de elegancia intima, donde cada detalle ha sido disenado para crear momentos que permanecen contigo para siempre.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link
            href="#booking"
            className="px-8 md:px-10 py-3.5 bg-[#1559A6] text-white text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-[#0E79BD] hover:-translate-y-0.5 transition-all duration-300"
          >
            Reservar Habitacion
          </Link>
          <Link
            href="#experience"
            className="px-8 md:px-10 py-3.5 bg-transparent border border-white/55 text-white text-xs font-medium tracking-[0.12em] uppercase rounded-sm hover:border-[#0E79BD] hover:text-[#0E79BD] transition-all duration-300"
          >
            Conocer el Hotel
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[0.62rem] tracking-[0.25em] uppercase text-white">
          Scroll
        </span>
        <div className="w-px h-[42px] bg-white/50 animate-scroll-pulse" />
      </div>
    </section>
  )
}
