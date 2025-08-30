import Registration from "./registration"
import { Heart } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-light-medical flex flex-col">
      {/* Header with Logo */}
      <div className="w-full max-w-6xl mx-auto px-4 pt-6 pb-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-sky-500" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            MediCare
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-3xl mx-auto px-4 pb-10 flex-1 flex items-start sm:items-center">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
          <div className="p-6 sm:p-8 flex items-center justify-center">
            <div className="w-full max-w-md">
              <Registration />
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacer on mobile */}
      <div className="h-4" />
    </div>
  )
}
