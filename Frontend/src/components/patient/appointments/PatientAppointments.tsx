import DoctorList from './DoctorList';
import PatientAppointmentsList from './PatientAppointmentsList';
import { useState } from 'react';

export default function PatientAppointments() {
  const [tab, setTab] = useState<'doctors' | 'my'>('doctors');
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-all ${tab === 'doctors' ? 'bg-blue-600 text-white' : 'bg-white/80 text-blue-700 hover:bg-blue-100'}`}
          onClick={() => setTab('doctors')}
        >
          Book Appointment
        </button>
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-all ${tab === 'my' ? 'bg-blue-600 text-white' : 'bg-white/80 text-blue-700 hover:bg-blue-100'}`}
          onClick={() => setTab('my')}
        >
          My Appointments
        </button>
      </div>
      {tab === 'doctors' && <DoctorList />}
      {tab === 'my' && <PatientAppointmentsList />}
    </div>
  );
}
