import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function MedicalFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 group">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-emerald-500 transition-all duration-500 group-hover:scale-125 group-hover:text-emerald-400 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                MediCare
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed transform transition-all duration-300 group-hover:text-white">
              Providing compassionate, expert healthcare services to our community for over 15 years.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-all duration-300 transform hover:scale-125 hover:-translate-y-1" />
            </div>
          </div>

          <div className="group">
            <h3 className="font-semibold mb-4 text-white transform transition-all duration-300 group-hover:text-emerald-400">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  General Medicine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Neurology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Pediatrics
                </a>
              </li>
            </ul>
          </div>

          <div className="group">
            <h3 className="font-semibold mb-4 text-white transform transition-all duration-300 group-hover:text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Appointments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:translate-x-2 hover:font-medium inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="group">
            <h3 className="font-semibold mb-4 text-white transform transition-all duration-300 group-hover:text-emerald-400">
              Contact Info
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="transform transition-all duration-300 hover:text-white hover:translate-x-1">123 Health Street</li>
              <li className="transform transition-all duration-300 hover:text-white hover:translate-x-1">Medical City, MC 12345</li>
              <li className="transform transition-all duration-300 hover:text-white hover:translate-x-1">Phone: +1 (555) 123-4567</li>
              <li className="transform transition-all duration-300 hover:text-white hover:translate-x-1">Email: info@medicare.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm transform transition-all duration-300 hover:text-emerald-400">
            © 2025 MediCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
