import { useEffect, useState } from 'react';
import api from '@/services/api';

export default function PatientAppointmentsList() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/appointments/my')
      .then(res => setAppointments(res.data.appointments || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-blue-400">Loading appointments...</div>;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-2 text-blue-300">My Appointments</h3>
      {appointments.length === 0 && <div className="text-blue-200">No appointments found.</div>}
      {appointments.map(app => (
        <div key={app._id} className="bg-white/10 rounded-xl p-4 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-white">Doctor: <span className="text-blue-200">{app.doctor?.fullName || 'N/A'}</span></div>
            <div className="text-blue-200 text-sm">Specialization: {app.doctor?.specialization || 'N/A'}</div>
            <div className="text-blue-200 text-sm">Date: {app.date}</div>
            <div className="text-blue-200 text-sm">Time: {app.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
