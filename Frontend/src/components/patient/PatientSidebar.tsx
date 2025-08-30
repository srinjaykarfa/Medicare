import { Link, useLocation } from "react-router-dom"
import { User, Calendar, FileText, Home, Activity, Heart } from "lucide-react"

const menu = [
  { label: "Home", icon: <Home className="w-5 h-5" />, path: "/patient" },
  { label: "Appointments", icon: <Calendar className="w-5 h-5" />, path: "/patient/appointments" },
  { label: "Medical Records", icon: <FileText className="w-5 h-5" />, path: "/patient/records" },
  { label: "Health Metrics", icon: <Activity className="w-5 h-5" />, path: "/patient/health" },
  { label: "Profile", icon: <User className="w-5 h-5" />, path: "/patient/profile" },
]

export default function PatientSidebar() {
  const location = useLocation()
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-blue-700 via-blue-700 to-teal-700 shadow-2xl flex flex-col rounded-r-3xl overflow-hidden z-20">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-6 w-20 h-20 bg-teal-400/10 rounded-full blur-xl"></div>

      {/* Header */}
      <div className="relative z-10 px-6 py-6 border-b border-blue-500/30">
        <div className="flex items-center gap-3">
          <Heart aria-hidden="true" className="h-7 w-7 text-sky-500 drop-shadow-md" />
          <span className="text-xl font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            MediCare
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex-1 px-6 py-8">
        <ul className="space-y-3">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                  location.pathname === item.path ||
                  (
                    item.path === "/patient" &&
                      (location.pathname === "/patient" || location.pathname === "/patient/home")
                  )
                    ? "bg-white/20 text-white font-semibold shadow-lg backdrop-blur-sm border border-white/30 scale-105"
                    : "text-blue-100 hover:bg-white/10 hover:text-white hover:shadow-md hover:scale-105"
                }`}
              >
                {/* Active indicator */}
                {(location.pathname === item.path ||
                  (item.path === "/patient" &&
                    (location.pathname === "/patient" || location.pathname === "/patient/home"))) && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-l-full"></div>
                )}

                <div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path ||
                    (
                      item.path === "/patient" &&
                        (location.pathname === "/patient" || location.pathname === "/patient/home")
                    )
                      ? "bg-white/20 shadow-md"
                      : "group-hover:bg-white/10 group-hover:scale-110"
                  }`}
                >
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
