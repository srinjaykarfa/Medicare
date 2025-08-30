import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Brain, Eye, Bone, Baby, ArrowRight, Star, Shield } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care services for all your health needs with experienced physicians.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced heart care and cardiovascular treatments from our specialized cardiac team.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert neurological care for brain, spine, and nervous system conditions.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services including vision correction and surgical procedures.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Specialized care for bones, joints, and musculoskeletal system injuries.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Dedicated healthcare services for infants, children, and adolescents.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-emerald-400/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-sky-100/70 backdrop-blur-sm border border-sky-200/50 rounded-full px-5 py-2 mb-5">
            <Star className="w-4 h-4 text-sky-700" />
            <span className="text-sm font-medium text-sky-800">Premium Healthcare Services</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-blue-teal">Find by Specialty</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse trusted doctors and schedule your appointment without hassle.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-700">350+</div>
              <div className="text-sm text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-700">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-700">50k+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              </div>

              <div className="relative z-10">
                <CardHeader className="text-center pb-3 pt-8">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-105">
                      <service.icon className="h-8 w-8 text-slate-700" />
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold text-slate-800">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-7">
                  <CardDescription className="text-center text-gray-600 leading-relaxed text-base mb-5">
                    {service.description}
                  </CardDescription>

                  <div className="flex justify-center">
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-5 py-2 rounded-xl hover:shadow-md transition-all duration-200">
                      <span className="font-medium">Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fadeInUp">
          <div className="bg-white/90 backdrop-blur-sm p-7 sm:p-8 rounded-2xl shadow-xl border border-white/40 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-sky-700" />
              <span className="font-semibold text-slate-800">All consultations are confidential</span>
            </div>
            <p className="text-gray-600 mb-5">Get premium care from certified specialists</p>
            <button className="bg-gradient-to-r from-sky-500 to-teal-500 hover:opacity-95 text-white px-7 py-3 rounded-xl transition">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
