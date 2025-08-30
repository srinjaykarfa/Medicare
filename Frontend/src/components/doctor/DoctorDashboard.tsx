export default function DoctorDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">Welcome, Doctor!</h2>
      <p className="text-blue-200 text-lg mb-8">Here you can manage your appointments, view your profile, and more.</p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-blue-200/20">
          <h3 className="text-xl font-bold text-blue-300 mb-2">Today's Appointments</h3>
          <p className="text-4xl font-bold text-white">3</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-blue-200/20">
          <h3 className="text-xl font-bold text-blue-300 mb-2">Upcoming Patients</h3>
          <p className="text-4xl font-bold text-white">7</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-blue-200/20">
          <h3 className="text-xl font-bold text-blue-300 mb-2">Earnings</h3>
          <p className="text-4xl font-bold text-white">₹12,000</p>
        </div>
      </div>
    </div>
  );
}
