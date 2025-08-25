import { MedicalHeader } from "./components/medical-header"
import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { MedicalFooter } from "./components/medical-footer"

export default function App() {
  return (
    <main className="min-h-screen">
      <MedicalHeader />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <MedicalFooter />
    </main>
  )
}
