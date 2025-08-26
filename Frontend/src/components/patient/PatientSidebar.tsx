import { Link, useLocation } from 'react-router-dom';
import { User, Calendar, FileText, LogOut, Home, Activity } from 'lucide-react';

const menu = [
  { label: 'Dashboard', icon: <Home className="w-5 h-5" />, path: '/patient/dashboard' },
  { label: 'Appointments', icon: <Calendar className="w-5 h-5" />, path: '/patient/appointments' },
  { label: 'Medical Records', icon: <FileText className="w-5 h-5" />, path: '/patient/records' },
  { label: 'Health Metrics', icon: <Activity className="w-5 h-5" />, path: '/patient/health' },
  { label: 'Profile', icon: <User className="w-5 h-5" />, path: '/patient/profile' },
];

export default function PatientSidebar() {
  const location = useLocation();
  return (
    <aside className="h-screen w-80 bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 shadow-2xl flex flex-col sticky top-0 rounded-r-3xl overflow-hidden relative">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-6 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
      
      {/* Header */}
      <div className="relative z-10 p-8 text-center border-b border-blue-500/30">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="text-2xl font-bold text-white drop-shadow-lg">M</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">MEDIFY+</h2>
        <p className="text-blue-200 text-sm font-medium">Patient Portal</p>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex-1 px-6 py-8">
        <ul className="space-y-3">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                  location.pathname === item.path || (item.path === '/patient/dashboard' && location.pathname === '/patient')
                    ? 'bg-white/20 text-white font-semibold shadow-lg backdrop-blur-sm border border-white/30 scale-105' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white hover:shadow-md hover:scale-105'
                }`}
              >
                {/* Active indicator */}
                {(location.pathname === item.path || (item.path === '/patient/dashboard' && location.pathname === '/patient')) && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-l-full"></div>
                )}
                
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path || (item.path === '/patient/dashboard' && location.pathname === '/patient')
                    ? 'bg-white/20 shadow-md' 
                    : 'group-hover:bg-white/10 group-hover:scale-110'
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="relative z-10 p-6 border-t border-blue-500/30">
        <div className="flex items-center gap-3 mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm shadow-lg hover:bg-white/15 transition-all duration-300 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm drop-shadow-sm">John Doe</p>
            <p className="text-blue-200 text-xs font-medium">Patient ID: #P001</p>
          </div>
        </div>
        
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-2xl text-red-300 hover:bg-red-500/20 hover:text-red-200 font-medium transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
          <div className="p-2 rounded-xl group-hover:bg-red-500/20 transition-all duration-300 group-hover:scale-110">
            <LogOut className="w-5 h-5" />
          </div>
          <span>Logout</span>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>
    </aside>
  );
}
