import { Bell, Settings, ChevronDown, User, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-blue-200/30 px-6 py-4 shadow-lg shadow-blue-500/10 sticky top-0 z-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-white/40 to-purple-500/5 backdrop-blur-xl"></div>
      <div className="absolute top-0 left-1/4 w-32 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-sm"></div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Doctor Panel
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl transition-all duration-300 relative shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">2</span>
          </button>
          <button className="p-3 bg-white/60 backdrop-blur-md hover:bg-white/80 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105 group">
            <Settings className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300 group-hover:rotate-45" />
          </button>
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl overflow-hidden z-50">
                <div className="py-2">
                  <Link to="/doctor/profile" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group" onClick={() => setIsDropdownOpen(false)}>
                    <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">My Profile</span>
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 group" onClick={() => setIsDropdownOpen(false)}>
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
      {isDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
      )}
    </nav>
  );
}
