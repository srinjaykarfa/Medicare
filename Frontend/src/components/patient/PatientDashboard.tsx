import {
  Calendar,
  FileText,
  User,
  Activity,
  Clock,
  Heart,
  TrendingUp,
  Star,
  Shield,
  Bell,
  Plus,
  ArrowRight,
} from "lucide-react"

export default function PatientDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Welcome Section */}
      <div className="relative bg-gradient-blue-teal rounded-3xl p-8 lg:p-12 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute bottom-10 left-10 w-24 h-24 bg-teal-400/25 rounded-full blur-lg animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-400/25 rounded-full blur-lg animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 animate-fadeInUp">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Welcome back, John!</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-fadeInUp">
                Empower Your Health
                <span className="block text-gradient-blue-teal animate-fadeInUp">With Smart Care</span>
              </h1>

              <p className="text-xl text-blue-100 animate-fadeInUp max-w-lg">
                Welcome back, John! 👋 Here's your personalized health dashboard with all your important information at
                a glance.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fadeInUp">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">0</div>
                <div className="text-xs text-blue-200">Appointments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5</div>
                <div className="text-xs text-blue-200">Health Records</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-blue-200">Health Score</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fadeInUp">
              <button className="btn-glossy-blue text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                <Calendar className="w-5 h-5 group-hover:animate-pulse" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Emergency
              </button>
            </div>
          </div>

          {/* Right Content - Health Avatar */}
          <div className="relative animate-fadeInUp">
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-xs">Health Score</div>
                    <div className="text-green-600 font-bold text-sm">98%</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-xs">Last Checkup</div>
                    <div className="text-blue-600 font-bold text-sm">5 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6" />
            <span className="font-medium">Appointments</span>
          </div>
          <div className="text-3xl font-bold mb-1">0</div>
          <div className="text-blue-100 text-sm">Upcoming</div>
        </div>
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-6 h-6" />
            <span className="font-medium">Health Records</span>
          </div>
          <div className="text-3xl font-bold mb-1">5</div>
          <div className="text-teal-100 text-sm">Total Records</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6" />
            <span className="font-medium">Health Score</span>
          </div>
          <div className="text-3xl font-bold mb-1">98%</div>
          <div className="text-blue-100 text-sm">Excellent</div>
        </div>
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6" />
            <span className="font-medium">Support</span>
          </div>
          <div className="text-3xl font-bold mb-1">24/7</div>
          <div className="text-teal-100 text-sm">Available</div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-200 transition-colors">
            <Activity className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Quick Checkup</h3>
          <p className="text-gray-600 text-sm">AI-powered health assessment</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
            <Heart className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Health Metrics</h3>
          <p className="text-gray-600 text-sm">Track your vital signs</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Appointments</h3>
          <p className="text-gray-600 text-sm">Book and manage appointments</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-200 transition-colors">
            <Clock className="w-6 h-6 text-cyan-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Emergency</h3>
          <p className="text-gray-600 text-sm">Immediate assistance</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105">
          <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
            <TrendingUp className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">Analytics</h3>
          <p className="text-gray-600 text-sm">Health insights overview</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Next Appointment */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Next Appointment</h3>
          </div>
          <div className="text-gray-600">
            <p className="mb-3">No upcoming appointments scheduled.</p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>

        {/* Recent Records */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Recent Records</h3>
          </div>
          <div className="text-gray-600">
            <p className="mb-3">Your medical records are up to date.</p>
            <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:from-teal-600 hover:to-teal-700 transition-all hover:scale-105 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              View Records
            </button>
          </div>
        </div>

        {/* Profile Status */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Profile Status</h3>
          </div>
          <div className="text-gray-600">
            <p className="mb-3">Profile 85% complete</p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 flex items-center gap-2">
              <User className="w-4 h-4" />
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
