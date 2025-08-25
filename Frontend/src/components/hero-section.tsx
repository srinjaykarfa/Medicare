import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/professional-doctor-with-stethoscope-in-modern-med.png"
          alt="Professional healthcare provider"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-up-delay-1">
                Health-Care by
                <span className="text-emerald-400 block animate-fade-up-delay-2">MediCare</span>
              </h1>

              <p className="text-xl lg:text-2xl font-medium text-emerald-300 animate-fade-up-delay-3">Team MediCare</p>

              <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200 animate-fade-up-delay-4">
                Welcome to our healthcare platform! We provide tools for tracking your medication, booking doctor
                appointments, checking symptoms with AI, and managing your health in one place. Our goal is to make
                healthcare simple, smart, and accessible for everyone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up-delay-5">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
                <Stethoscope className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
