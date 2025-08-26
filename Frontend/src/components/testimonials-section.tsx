import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Heart, CheckCircle, Users, Award } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    avatar: "SJ",
    content: "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
    rating: 5,
    location: "New York",
    treatment: "Cardiology"
  },
  {
    name: "Michael Chen",
    role: "Patient", 
    avatar: "MC",
    content: "Outstanding medical expertise combined with genuine compassion. I couldn't have asked for better healthcare service.",
    rating: 5,
    location: "California",
    treatment: "Neurology"
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    avatar: "ER", 
    content: "From booking to treatment, everything was seamless. The doctors took time to explain everything clearly and thoroughly.",
    rating: 5,
    location: "Texas",
    treatment: "Pediatrics"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400/15 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-green-100/70 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-2 mb-6">
            <Heart className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Patient Testimonials</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Get answers to common questions about our healthcare services
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Award Winning</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">50k+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-blue-500" />
                </div>

                {/* User Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.treatment} • {testimonial.location}
                    </p>
                  </div>
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-125"
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 leading-relaxed text-base group-hover:text-gray-900 transition-colors duration-300 mb-4">
                  "{testimonial.content}"
                </blockquote>

                {/* Verified Badge */}
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">Verified Patient</span>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50,000+
              </div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                350+
              </div>
              <div className="text-gray-600 font-medium">Expert Doctors</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
