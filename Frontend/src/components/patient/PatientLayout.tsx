import PatientSidebar from "./PatientSidebar"
import PatientNavbar from "./PatientNavbar"
import { Outlet } from "react-router-dom"

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed sidebar sits on top-left */}
      <PatientSidebar />
      {/* Content shifts right by sidebar width so nothing is hidden */}
      <div className="relative z-10 min-h-screen flex flex-col pl-80">
        <PatientNavbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
