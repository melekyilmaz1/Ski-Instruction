import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import BlogSection from './components/BlogSection'
import BlogDetailPage from './components/BlogDetailPage'
import BookingSection from './components/BookingSection'
import ReservationPage from './components/ReservationPage'
import './globals.css'

function Home() {
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <HeroSection />
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <AboutSection />
    </div>
  )
}

function Services() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <ServicesSection />
    </div>
  )
}

function Gallery() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <GallerySection />
    </div>
  )
}

function BlogList() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <BlogSection />
    </div>
  )
}

function Booking() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <BookingSection />
    </div>
  )
}

function Reservation() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <ReservationPage />
    </div>
  )
}

// Layout bileşeni: Anasayfada footer'ı gizler, diğer sayfalarda gösterir
function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/dersler" element={<Services />} />
          <Route path="/hikayeler" element={<Gallery />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/iletisim" element={<Booking />} />
          <Route path="/rezervasyon" element={<Reservation />} />
        </Routes>
      </div>
      {!isHomePage && (
        <footer className="py-8 border-t border-neutral-800 text-center text-neutral-500 text-sm bg-black relative z-10">
          <p>&copy; 2026 snow. tüm hakları saklıdır.</p>
        </footer>
      )}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  )
}