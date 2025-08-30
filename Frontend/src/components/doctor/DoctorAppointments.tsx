export default function DoctorAppointments() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">My Appointments</h2>
      <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-blue-200/20">
        <p className="text-blue-200">You have no appointments scheduled for today.</p>
      </div>
    </div>
  );
}
