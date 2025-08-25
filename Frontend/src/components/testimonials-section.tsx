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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from patients who trust us with their healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
