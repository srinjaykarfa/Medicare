import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react"

export function MedicalFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-sky-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-400/10 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-teal-400/15 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-20 h-20 bg-emerald-400/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-14">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gradient-blue-teal">MediCare</h3>
                <p className="text-sky-200/90 leading-relaxed text-sm">
                  Empowering individuals to take charge of their health through innovative digital tools and expert
                  care.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-500 transition cursor-pointer group">
                  <Facebook className="h-5 w-5 text-sky-200 group-hover:text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-500 transition cursor-pointer group">
                  <Twitter className="h-5 w-5 text-sky-200 group-hover:text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-emerald-500 transition cursor-pointer group">
                  <Instagram className="h-5 w-5 text-sky-200 group-hover:text-white" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-600 transition cursor-pointer group">
                  <Linkedin className="h-5 w-5 text-sky-200 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-6">SERVICES</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-sky-200 hover:text-white transition inline-block">
                    ✦ World Class Treatment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-white transition inline-block">
                    ✦ 24/7 Ambulance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-white transition inline-block">
                    ✦ Health Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-white transition inline-block">
                    ✦ Free Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sky-200 hover:text-white transition inline-block">
                    ✦ Emergency Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6">CONTACT</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-sky-300" />
                  </div>
                  <span className="text-sky-200">info@medicare.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-emerald-300" />
                  </div>
                  <span className="text-sky-200">+91 98070 67196</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-teal-300" />
                  </div>
                  <span className="text-sky-200">Kolkata, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-teal-300" />
                  </div>
                  <span className="text-sky-200">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-6">NEWSLETTER</h4>
              <p className="text-sky-200/90 text-sm mb-4">Get weekly news & updates in your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                />
                <button className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:opacity-95 px-4 py-2 rounded-lg transition text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sky-200 text-sm">© {new Date().getFullYear()} MediCare. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-sky-200 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition">
                Terms & Conditions
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
