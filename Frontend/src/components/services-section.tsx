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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Medical Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Comprehensive healthcare services delivered by our team of experienced specialists
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <service.icon className="h-14 w-14 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed text-base font-normal">
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
