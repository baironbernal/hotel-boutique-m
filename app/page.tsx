import { Navbar } from '@/components/hotel/navbar'
import { Hero } from '@/components/hotel/hero'
import { BookingWidget } from '@/components/hotel/booking-widget'
import { Experience } from '@/components/hotel/experience'
import { Rooms } from '@/components/hotel/rooms'
import { Amenities } from '@/components/hotel/amenities'
import { Gallery } from '@/components/hotel/gallery'
import { Reviews } from '@/components/hotel/reviews'
import { CtaBand } from '@/components/hotel/cta-band'
import { Footer } from '@/components/hotel/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookingWidget />
      <Experience />
      <Rooms />
      <Gallery />
      <Reviews />
      <CtaBand />
      <Footer />
    </main>
  )
}
