import { Bell, Settings, ChevronDown, User, Star, Shield, Calendar, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PatientNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-blue-200/30 px-6 py-4 shadow-lg shadow-blue-500/10 sticky top-0 z-50 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-white/40 to-purple-500/5 backdrop-blur-xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-sm"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        {/* Left side - Welcome */}
        <div className="flex items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Good Morning, John! 👋
              </h1>
            </div>
            <p className="text-sm text-gray-600 font-medium ml-8">Monday, August 26, 2025</p>
          </div>
        </div>

        {/* Center - Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <div className="relative group">
            <button className="p-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl transition-all duration-300 relative shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 group">
              <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">3</span>
            </button>
          </div>

          {/* Settings */}
          <button className="p-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 group">
            <Settings className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300 group-hover:rotate-45" />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleDropdown}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl px-4 py-2 cursor-pointer transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 group border border-blue-200/30"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              <div className="hidden md:block">
                <div className="flex items-center gap-1">
                  <p className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">John Doe</p>
                  <Shield className="w-3 h-3 text-green-500" />
                </div>
                <p className="text-xs text-gray-500 font-medium">Premium Patient</p>
              </div>
              
              <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-md border border-blue-200/50 rounded-2xl shadow-2xl overflow-hidden z-50">
                <div className="py-2">
                  <Link 
                    to="/patient/profile"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">My Profile</span>
                  </Link>
                  
                  <Link 
                    to="/patient/appointments"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">My Appointments</span>
                  </Link>
                  
                  <div className="border-t border-gray-200 my-1"></div>
                  
                  <button 
                    className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                      <LogOut className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </nav>
  );
}
