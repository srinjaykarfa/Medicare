import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function MedicalHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 via-black/10 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Heart className="h-8 w-8 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300 group-hover:drop-shadow-lg animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-300 to-blue-400 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 drop-shadow-lg">
              MediCare
            </span>
          </div>
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50 px-8 py-3 text-base font-medium transition-all duration-500 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 group"
            >
              <span className="bg-gradient-to-r from-white via-blue-300 to-blue-400 bg-clip-text text-transparent font-bold transition-all duration-300 group-hover:from-blue-200 group-hover:via-blue-300 group-hover:to-blue-500">
                Login
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
