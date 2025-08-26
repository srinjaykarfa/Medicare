import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Heart, Brain, Eye, Bone, Baby, ArrowRight, Star, Shield } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care services for all your health needs with experienced physicians.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-200"
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Advanced heart care and cardiovascular treatments from our specialized cardiac team.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-100",
    hoverColor: "hover:bg-red-200"
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert neurological care for brain, spine, and nervous system conditions.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200"
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services including vision correction and surgical procedures.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200"
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Specialized care for bones, joints, and musculoskeletal system injuries.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-200"
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Dedicated healthcare services for infants, children, and adolescents.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-100",
    hoverColor: "hover:bg-pink-200"
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100/70 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Premium Healthcare Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent drop-shadow-lg">
              Find by Specialty
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. 🔍
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">350+</div>
              <div className="text-sm text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">50k+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}>
                <div className="absolute inset-[2px] bg-white rounded-lg"></div>
              </div>
              
              <div className="relative z-10">
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${service.bgColor} ${service.hoverColor} rounded-2xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <service.icon className="h-8 w-8 text-gray-700 transition-all duration-500 group-hover:scale-125" />
                    </div>
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-blue-700">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-center text-gray-600 group-hover:text-gray-700 leading-relaxed text-base mb-6 transition-all duration-300">
                    {service.description}
                  </CardDescription>
                  
                  {/* Action Button */}
                  <div className="flex justify-center">
                    <button className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}>
                      <span className="font-medium">Book Now</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-800">All consultations are 100% confidential</span>
            </div>
            <p className="text-gray-600 mb-6">Get premium healthcare services from our certified specialists</p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
