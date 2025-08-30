import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/professional-doctor-with-stethoscope-in-modern-med.png"
          alt="Professional healthcare provider"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-gradient-blue-teal-overlay-soft mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl sm:max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Smarter Care with
                <span className="block text-emerald-300">MediCare</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100/90">
                Track medications, book doctor appointments, and manage your health in one secure place. Simple, smart,
                and accessible for everyone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-gradient-blue-teal text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:opacity-95 transition"
                >
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 transition"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
