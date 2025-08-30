"use client";

import { LoginForm } from "./login";
import { Heart } from "lucide-react";
import { useCallback, useState } from "react";

export default function LoginPage() {
  const [leftAnimOn, setLeftAnimOn] = useState(true);
  const [rightAnimOn, setRightAnimOn] = useState(true);

  const replayAnimations = useCallback(() => {
    setLeftAnimOn(false);
    setRightAnimOn(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLeftAnimOn(true);
        setRightAnimOn(true);
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      {/* Header with Logo */}
      <div className="w-full max-w-5xl mx-auto pb-6">
        <div className="flex items-center justify-center gap-3 group cursor-pointer">
          <Heart className="h-8 w-8 text-sky-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-teal-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
            MediCare
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Image/Message with smoother fade+slide-in */}
            <div
              className={
                "relative hidden md:block" +
                (leftAnimOn
                  ? " animate-fade-slide-left animation-delay-500"
                  : "")
              }
            >
              <img
                src="/modern-medical-facility-with-doctors-and-patients-.png"
                alt="Healthcare professionals in a modern medical facility"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10" />
              <div className="absolute inset-0 bg-gradient-blue-teal-overlay-soft mix-blend-multiply" />

              <div className="relative z-10 p-8 h-[420px] flex flex-col justify-center text-white">
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold leading-tight">
                    Welcome to MediCare
                  </h1>
                  <p className="text-base font-semibold bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Healthcare Team
                  </p>
                  <p className="text-sm leading-relaxed text-gray-100">
                    We are here to provide you with the best healthcare
                    services. Sign in to access your medical records and
                    appointments.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Login Form with fade+slide-in from right */}
            <div
              className={
                "p-6 sm:p-8 flex items-center justify-center" +
                (rightAnimOn
                  ? " animate-fade-slide-right animation-delay-1000"
                  : "")
              }
            >
              <div className="w-full max-w-sm">
                <LoginForm onReanimate={replayAnimations} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-slate-600">
        Looking for better healthcare services?
        <a href="#" className="text-teal-600 hover:text-teal-700 ml-1">
          Try MediCare
        </a>
      </div>
    </div>
  );
}
