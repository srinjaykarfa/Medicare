import { LoginForm } from "./login"
import { Heart} from "lucide-react"


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-light-medical flex flex-col items-center">
      {/* Header with Logo */}
      <div className="w-full max-w-4xl mx-auto pt-8 pb-12">
        <div className="flex items-center justify-center gap-3 group cursor-pointer">
          <Heart className="h-8 w-8 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300 group-hover:drop-shadow-lg animate-pulse" />
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-400 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 drop-shadow-lg">
            MediCare
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            {/* Left side - Image/Message */}
            <div className="w-1/2 relative overflow-hidden animate-custom-slide-in-left">
              {/* Background Image */}
              <img 
                src="/modern-medical-facility-with-doctors-and-patients-.png" 
                alt="Medical professionals" 
                className="absolute inset-0 w-full h-full object-cover animate-scale-in"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-2xl lg:text-3xl font-bold leading-tight animate-fade-up-delay-1">
                      Welcome to MediCare
                    </h1>

                    <p className="text-base font-medium bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-clip-text text-transparent animate-fade-up-delay-3 drop-shadow-lg">Healthcare Team</p>

                    <p className="text-sm leading-relaxed text-gray-200 animate-fade-up-delay-4">
                      We're here to provide you with the best healthcare services. 
                      Sign in to access your medical records and appointments.
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-1/2 p-8 flex items-center justify-center animate-custom-slide-in-right">
              <div className="w-full max-w-sm">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Looking for better healthcare services? 
        <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">Try MediCare</a>
      </div>
    </div>
  )
}
