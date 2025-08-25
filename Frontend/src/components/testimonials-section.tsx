import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Patient",
    content:
      "Outstanding medical expertise combined with genuine compassion. I couldn't have asked for better healthcare service.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    content:
      "From booking to treatment, everything was seamless. The doctors took time to explain everything clearly and thoroughly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-gray-900 to-emerald-600 bg-clip-text text-transparent mb-4 transform transition-all duration-700 hover:scale-105 drop-shadow-lg">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto transform transition-all duration-500 hover:text-gray-800">
            Real experiences from patients who trust us with their healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-0 transform hover:scale-105 hover:-translate-y-3 group cursor-pointer"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300"
                      style={{
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300 transform group-hover:scale-105">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                  <p className="font-semibold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors duration-300 transform group-hover:scale-105 pl-2">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300 pl-2">
                    {testimonial.role}
                  </p>
                </div>
                
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-tl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
