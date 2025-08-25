import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Brain, Eye, Bone, Baby } from "lucide-react"

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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-600 to-gray-900 bg-clip-text text-transparent mb-6 transform transition-all duration-700 hover:scale-105 drop-shadow-lg">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed transform transition-all duration-500 hover:text-gray-800">
            Comprehensive healthcare services delivered by our team of experienced specialists
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:border-emerald-300 transition-all duration-500 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50 transform hover:scale-105 hover:-translate-y-3 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 group cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <service.icon className="h-14 w-14 text-emerald-600 mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:text-emerald-500 group-hover:rotate-12 drop-shadow-lg" />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300 transform group-hover:scale-105">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 group-hover:text-gray-700 leading-relaxed text-base font-normal transition-all duration-300 transform group-hover:scale-105">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
