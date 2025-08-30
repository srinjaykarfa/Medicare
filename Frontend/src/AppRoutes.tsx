import { Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./components/login-registration/login-page"
import RegistrationPage from "./components/login-registration/registration-page"

import PatientLayout from "./components/patient/PatientLayout"
import PatientLanding from "./components/patient/PatientLanding"
import PatientAppointments from "./components/patient/appointments/PatientAppointments"
import PatientRecords from "./components/patient/PatientRecords"
import PatientProfile from "./components/patient/PatientProfile"
import PatientHealth from "./components/patient/PatientHealth"

import DoctorLayout from "./components/doctor/DoctorLayout"
import DoctorDashboard from "./components/doctor/DoctorDashboard"
import DoctorAppointments from "./components/doctor/DoctorAppointments"
import DoctorProfile from "./components/doctor/DoctorProfile"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/patient" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<PatientLanding />} />
        <Route path="home" element={<PatientLanding />} />
        <Route path="dashboard" element={<Navigate to="/patient" replace />} />
        <Route path="appointments" element={<PatientAppointments />} />
        <Route path="records" element={<PatientRecords />} />
        <Route path="health" element={<PatientHealth />} />
        <Route path="profile" element={<PatientProfile />} />
      </Route>

      {/* Doctor Panel Routes */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route index element={<DoctorDashboard />} />
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointments" element={<DoctorAppointments />} />
        <Route path="profile" element={<DoctorProfile />} />
      </Route>
    </Routes>
  )
}
