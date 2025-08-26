import { Calendar, Plus, Filter } from 'lucide-react';

export default function PatientAppointments() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-2 drop-shadow-lg">
            My Appointments
          </h1>
          <p className="text-gray-600">Manage your upcoming and past appointments</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" />
          Book Appointment
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">All</button>
        <button className="bg-white/80 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">Upcoming</button>
        <button className="bg-white/80 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">Completed</button>
        <button className="bg-white/80 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">Cancelled</button>
        <button className="bg-white/80 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {/* No appointments message */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No appointments scheduled</h3>
          <p className="text-gray-600 mb-6">You don't have any appointments yet. Book your first appointment to get started.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all">
            Book Your First Appointment
          </button>
        </div>

        {/* Sample appointment card (commented out) */}
        {/* 
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">General Consultation</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Confirmed</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              March 15, 2024
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              10:30 AM - 11:00 AM
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              Room 205, Building A
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
              View Details
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              Reschedule
            </button>
            <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm hover:bg-red-200 transition-colors">
              Cancel
            </button>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
