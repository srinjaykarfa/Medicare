import { Activity, Heart, Thermometer, Weight, TrendingUp, Calendar } from 'lucide-react';

export default function PatientHealth() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2 drop-shadow-lg">
          Health Metrics
        </h1>
        <p className="text-gray-600">Track your vital signs and health indicators</p>
      </div>

      {/* Health Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-6 h-6" />
            <span className="font-medium">Heart Rate</span>
          </div>
          <div className="text-2xl font-bold mb-1">72 BPM</div>
          <div className="text-red-100 text-sm">Normal</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-6 h-6" />
            <span className="font-medium">Blood Pressure</span>
          </div>
          <div className="text-2xl font-bold mb-1">120/80</div>
          <div className="text-blue-100 text-sm">Optimal</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Thermometer className="w-6 h-6" />
            <span className="font-medium">Temperature</span>
          </div>
          <div className="text-2xl font-bold mb-1">98.6°F</div>
          <div className="text-orange-100 text-sm">Normal</div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <Weight className="w-6 h-6" />
            <span className="font-medium">Weight</span>
          </div>
          <div className="text-2xl font-bold mb-1">170 lbs</div>
          <div className="text-green-100 text-sm">Stable</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Trends */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Health Trends</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Weight</span>
              <span className="text-green-600 font-medium">↓ 2 lbs this month</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Blood Pressure</span>
              <span className="text-blue-600 font-medium">→ Stable</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Heart Rate</span>
              <span className="text-green-600 font-medium">↓ Improving</span>
            </div>
          </div>
        </div>

        {/* Recent Readings */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Recent Readings</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Today, 9:00 AM</span>
              <span className="text-gray-800 font-medium">BP: 118/79, HR: 74</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Yesterday, 8:30 AM</span>
              <span className="text-gray-800 font-medium">BP: 122/81, HR: 71</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">2 days ago, 9:15 AM</span>
              <span className="text-gray-800 font-medium">BP: 119/80, HR: 73</span>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all">
            Add New Reading
          </button>
        </div>
      </div>
    </div>
  );
}
