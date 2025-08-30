import { Link } from "react-router-dom"
import { Calendar, FileText, User, Activity, Mail, Phone } from "lucide-react"
import { HeroSection } from "@/components/patient/landing/hero-section"
import { ServicesSection } from "@/components/patient/landing/services-section"
import { TestimonialsSection } from "@/components/patient/landing/testimonials-section"
import { MedicalFooter } from "@/components/patient/landing/medical-footer"

export default function PatientLanding() {
  return (
    <>
      {/* Public landing hero reused, navbar should be transparent on this route */}
      <HeroSection />

      {/* Main content below the hero, pulled from previous PatientLanding sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16 mt-8 md:mt-12 lg:mt-14 pb-24">
        {/* Quick actions */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/patient/appointments"
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Appointments</h3>
            <p className="text-gray-600 text-sm">Book and manage your visits</p>
          </Link>

          <Link
            to="/patient/records"
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Health Records</h3>
            <p className="text-gray-600 text-sm">View prescriptions and reports</p>
          </Link>

          <Link
            to="/patient/health"
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Health Metrics</h3>
            <p className="text-gray-600 text-sm">Track vitals and progress</p>
          </Link>

          <Link
            to="/patient/profile"
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 flex flex-col"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <User className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Profile</h3>
            <p className="text-gray-600 text-sm">Manage personal information</p>
          </Link>
        </section>

        {/* About section (anchor target) */}
        <section id="about" className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white/95 backdrop-blur-md shadow-md border border-slate-200/70">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient-blue-teal mb-4 text-pretty">
              About MediCare Patient Panel
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Manage appointments, access medical records, track health metrics, and update your profile — all in one
              place. Built with a modern blue–teal healthcare theme for clarity and ease of use.
            </p>
            <ul className="mt-5 space-y-2 text-gray-700">
              <li>• Fast access to upcoming appointments</li>
              <li>• Secure health record viewing</li>
              <li>• Personalized metrics and insights</li>
            </ul>
          </div>
          <div className="rounded-2xl p-8 bg-gradient-blue-teal text-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
            <p className="text-blue-100 mb-5">Jump back into the essentials.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/patient/appointments"
                className="bg-white/10 border border-white/25 px-4 py-2 rounded-xl hover:bg-white/15 transition"
              >
                Manage Appointments
              </Link>
              <Link
                to="/patient/records"
                className="bg-white/10 border border-white/25 px-4 py-2 rounded-xl hover:bg-white/15 transition"
              >
                View Records
              </Link>
              <Link
                to="/patient/health"
                className="bg-white/10 border border-white/25 px-4 py-2 rounded-xl hover:bg-white/15 transition"
              >
                Health Metrics
              </Link>
            </div>
          </div>
        </section>

        {/* Contact section (anchor target) */}
        <section id="contact" className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Mail className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Email Support</h3>
            <p className="text-gray-600 text-sm">support@medicare.example</p>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70">
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-200/70">
            <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
            <p className="text-gray-600 text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-600 text-sm">Sat: 10:00 AM – 2:00 PM</p>
          </div>
        </section>
      </div>

      <ServicesSection />
      <TestimonialsSection />
      <MedicalFooter />
    </>
  )
}
