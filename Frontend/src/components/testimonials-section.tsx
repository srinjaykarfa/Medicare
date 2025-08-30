import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Heart, CheckCircle, Users, Award } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    avatar: "SJ",
    content:
      "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
    rating: 5,
    location: "New York",
    treatment: "Cardiology",
  },
  {
    name: "Michael Chen",
    role: "Patient",
    avatar: "MC",
    content:
      "Outstanding medical expertise combined with genuine compassion. I couldn't have asked for better healthcare service.",
    rating: 5,
    location: "California",
    treatment: "Neurology",
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    avatar: "ER",
    content:
      "From booking to treatment, everything was seamless. The doctors took time to explain everything clearly and thoroughly.",
    rating: 5,
    location: "Texas",
    treatment: "Pediatrics",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-sky-50/30 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-sky-400/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-20 h-20 bg-emerald-400/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-emerald-100/70 backdrop-blur-sm border border-emerald-200/50 rounded-full px-5 py-2 mb-5">
            <Heart className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-medium text-emerald-800">Patient Testimonials</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-blue-teal">What Our Patients Say</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Real reviews from patients who trust MediCare for quality care.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-medium text-gray-700">Award Winning</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-600" />
              <span className="text-sm font-medium text-gray-700">50k+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-0 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <CardContent className="p-7 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-sky-500" />
                </div>

                {/* User Avatar */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 group-hover:text-sky-700 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.treatment} • {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-3 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-sky-500 fill-current transition-all duration-300 group-hover:scale-125"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300 mb-4">
                  "{testimonial.content}"
                </blockquote>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-sm text-emerald-700">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Verified Patient</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-xl border border-white/40">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-700 mb-1">50,000+</div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700 mb-1">350+</div>
              <div className="text-gray-600 font-medium">Expert Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-700 mb-1">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-700 mb-1">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
