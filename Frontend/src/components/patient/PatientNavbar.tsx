"use client"

import { ChevronDown, User, Shield, Calendar, LogOut } from "lucide-react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"

export default function PatientNavbar() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const startCloseTimer = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 180)
  }

  const openMenu = () => setOpen(true)
  const closeMenu = () => {
    clearCloseTimer()
    setOpen(false)
  }

  return (
    <nav
      className={
        "bg-white/95 border-b border-blue-200/30 px-4 py-4 md:py-5 shadow-lg shadow-blue-500/10 sticky top-0 z-[60] relative overflow-visible"
      }
    >
      <div className="relative z-10 flex items-center justify-between">
        {/* Left side - spacer */}
        <div className="w-8" aria-hidden="true"></div>

        {/* Center - Navigation Menu */}
        <div className="flex items-center gap-4">
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 text-xs font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 text-xs font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Right side - Actions */}
        <div
          className="relative"
          onMouseEnter={() => {
            clearCloseTimer()
            openMenu()
          }}
          onMouseLeave={startCloseTimer}
          onFocus={openMenu}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              closeMenu()
            }
          }}
        >
          <button
            className="flex items-center gap-2 bg-white/70 hover:bg-white/90 rounded-xl px-2 py-1 cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 border border-blue-200/40"
            aria-haspopup="menu"
            aria-expanded={open}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeMenu()
              if (e.key === "Enter" || e.key === " ") openMenu()
            }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="hidden md:block text-left">
              <div className="flex items-center gap-1">
                <p className="text-[11px] font-bold text-gray-800 leading-none">John Doe</p>
                <Shield className="w-3 h-3 text-green-500" aria-label="Verified" />
              </div>
              <p className="text-[10px] text-gray-500 font-medium leading-none">Premium Patient</p>
            </div>

            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""} text-gray-500`}
              aria-hidden="true"
            />
          </button>

          {open && (
            <div
              className="absolute right-0 top-full w-56 bg-white/95 border border-blue-200/50 rounded-2xl shadow-2xl overflow-hidden z-[70] translate-y-1"
              role="menu"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={startCloseTimer}
            >
              <div className="py-2">
                <Link
                  to="/patient/appointments"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  <div className="w-7 h-7 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">My Appointments</span>
                </Link>

                <Link
                  to="/patient/profile"
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  <div className="w-7 h-7 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">My Profile</span>
                </Link>

                <div className="border-t border-gray-200 my-1"></div>

                <button
                  className="flex items-center gap-3 px-3 py-2.5 w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 group"
                  role="menuitem"
                  onClick={() => {
                    // TODO: wire logout
                    closeMenu()
                  }}
                >
                  <div className="w-7 h-7 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <LogOut className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
