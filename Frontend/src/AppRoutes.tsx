import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { MedicalHeader } from "./components/medical-header";
import { MedicalFooter } from "./components/medical-footer";
import LoginPage from "./components/login-registration/login-page";
import RegistrationPage from "./components/login-registration/registration-page";

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
    </Routes>
  );
}
