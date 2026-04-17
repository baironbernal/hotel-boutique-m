import Link from 'next/link'

export function CtaBand() {
  return (
    <section
      id="contact"
      className="bg-[url('/images/WhatsApp-Image-2026-01-09-at-9.34.10-AM-1-1.jpeg')] bg-center bg-cover bg-no-repeat relative py-24 md:py-32 px-5 md:px-20 text-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/75" />

      {/* Content */}
      <div className="relative">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#0E79BD] mb-3 block">
          Disponibilidad Limitada
        </span>

        <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[1.2] text-white max-w-[580px] mx-auto">
          Comienza tu <em className="italic text-[#0E79BD]">historia</em>
          <br />
          en Hotel M Boutique
        </h2>

        <div className="w-11 h-0.5 bg-[#0E79BD] mt-4 mx-auto" />

        <p className="text-sm leading-relaxed text-white/62 max-w-[420px] mx-auto mt-6 mb-10">
          Nuestras habitaciones estan disenadas para quienes aprecian el arte de hospedarse bien. Reserva la tuya antes de que se agote la disponibilidad.
        </p>

        <Link
          href="#booking"
          className="inline-block px-10 py-3.5 bg-[#1559A6] text-white text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-[#0E79BD] hover:-translate-y-0.5 transition-all duration-300"
        >
          Reservar una Habitacion
        </Link>
      </div>
    </section>
  )
}
