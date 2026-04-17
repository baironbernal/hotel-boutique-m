"use client"

import { useState, useEffect } from 'react'

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 Adultos')
  const [roomType, setRoomType] = useState('Cualquier habitacion')

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const threeDaysLater = new Date(today)
    threeDaysLater.setDate(today.getDate() + 3)

    const formatDate = (d: Date) => d.toISOString().split('T')[0]
    setCheckIn(formatDate(tomorrow))
    setCheckOut(formatDate(threeDaysLater))
  }, [])

  const handleCheckInChange = (value: string) => {
    setCheckIn(value)
    const nextDay = new Date(value)
    nextDay.setDate(nextDay.getDate() + 1)
    const formatDate = (d: Date) => d.toISOString().split('T')[0]
    if (new Date(checkOut) <= new Date(value)) {
      setCheckOut(formatDate(nextDay))
    }
  }

  return (
    <div id="booking" className="bg-dark px-5 md:px-8 lg:px-15 py-8 md:py-7 relative z-10">
      <h3 className="w-full font-serif text-base font-medium text-white/90 mb-4 md:mb-2 tracking-wide">
        Verificar Disponibilidad
      </h3>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-3.5 lg:gap-5 flex-wrap">
        {/* Check-in */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0E79BD] mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => handleCheckInChange(e.target.value)}
            className="border border-white/12 w-full rounded-sm px-3.5 py-2.5 font-sans text-sm text-white bg-white/6 outline-none focus:border-[#0E79BD] transition-colors duration-200 [color-scheme:dark] [-webkit-text-fill-color:white]"
          />
        </div>

        <div className="hidden lg:block w-px h-11 bg-white/10 self-end" />

        {/* Check-out */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0E79BD] mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn}
            className="border border-white/12 w-full rounded-sm px-3.5 py-2.5 font-sans text-sm text-white bg-white/6 outline-none focus:border-[#0E79BD] transition-colors duration-200 [color-scheme:dark] [-webkit-text-fill-color:white]"
          />
        </div>

        <div className="hidden lg:block w-px h-11 bg-white/10 self-end" />

        {/* Guests */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0E79BD] mb-2">
            Huespedes
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border border-white/12 w-full rounded-sm px-3.5 py-2.5 pr-9 font-sans text-sm text-white bg-white/6 outline-none focus:border-[#0E79BD] transition-colors duration-200 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.5)%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center]"
          >
            <option value="1 Adulto" className="bg-dark text-white">1 Adulto</option>
            <option value="2 Adultos" className="bg-dark text-white">2 Adultos</option>
            <option value="2 Adultos + 1 Nino" className="bg-dark text-white">2 Adultos + 1 Nino</option>
            <option value="2 Adultos + 2 Ninos" className="bg-dark text-white">2 Adultos + 2 Ninos</option>
          </select>
        </div>

        <div className="hidden lg:block w-px h-11 bg-white/10 self-end" />

        {/* Room Type */}
        <div className="flex flex-col flex-1 min-w-[140px]">
          <label className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0E79BD] mb-2">
            Tipo de Habitacion
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="border border-white/12 w-full rounded-sm px-3.5 py-2.5 pr-9 font-sans text-sm text-white bg-white/6 outline-none focus:border-[#0E79BD] transition-colors duration-200 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.5)%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center]"
          >
            <option value="Cualquier habitacion" className="bg-dark text-white">Cualquier habitacion</option>
            <option value="Habitacion Clasica" className="bg-dark text-white">Habitacion Clasica</option>
            <option value="Suite Deluxe" className="bg-dark text-white">Suite Deluxe</option>
            <option value="Suite Penthouse" className="bg-dark text-white">Suite Penthouse</option>
          </select>
        </div>

        <button className="w-full lg:w-auto px-9 py-3 bg-[#1559A6] text-white border-none rounded-sm cursor-pointer font-sans text-[0.8rem] font-semibold tracking-[0.12em] uppercase hover:bg-[#0E79BD] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap self-end">
          Buscar Habitaciones
        </button>
      </div>
    </div>
  )
}
