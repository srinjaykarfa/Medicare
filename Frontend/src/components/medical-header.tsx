import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function MedicalHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-sky-500" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              MediCare
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-full"
              >
                <span className="text-white">Login</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-blue-teal text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-full hover:opacity-90 transition">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
