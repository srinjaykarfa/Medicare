import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MedicalHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">MediCare</span>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
