
import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { MedicalHeader } from "./components/medical-header";
import { MedicalFooter } from "./components/medical-footer";
import LoginPage from "./components/login-registration/login-page";
import RegistrationPage from "./components/login-registration/registration-page";
import PatientLayout from "./components/patient/PatientLayout";
import PatientDashboard from "./components/patient/PatientDashboard";
import PatientAppointments from "./components/patient/PatientAppointments";
import PatientRecords from "./components/patient/PatientRecords";
import PatientProfile from "./components/patient/PatientProfile";
import PatientHealth from "./components/patient/PatientHealth";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <MedicalHeader />
            <HeroSection />
            <ServicesSection />
            <TestimonialsSection />
            <MedicalFooter />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<PatientDashboard />} />
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="appointments" element={<PatientAppointments />} />
        <Route path="records" element={<PatientRecords />} />
        <Route path="health" element={<PatientHealth />} />
        <Route path="profile" element={<PatientProfile />} />
      </Route>
    </Routes>
  );
}
