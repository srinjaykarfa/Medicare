import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import api from '@/services/api';
import BookAppointment from './BookAppointment';

export default function DoctorList() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any | null>(null);
  const [showBook, setShowBook] = useState(false);

  useEffect(() => {
    api.get('/doctors')
      .then(res => setDoctors(res.data.data || []))
      .catch(() => setDoctors([]));
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">Available Doctors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.length === 0 && <div className="text-blue-200">No doctors available.</div>}
        {doctors.map(doc => (
          <div key={doc._id} className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-blue-200/20 flex flex-col items-start">
            <div className="font-bold text-white text-lg mb-1">{doc.fullName}</div>
            <div className="text-blue-200 text-sm mb-1">Specialization: {doc.specialization}</div>
            <div className="text-blue-200 text-sm mb-1">Hospital: {doc.hospital}</div>
            <div className="text-blue-200 text-sm mb-3">Experience: {doc.yearsOfExperience} years</div>
            <Button onClick={() => { setSelectedDoctor(doc); setShowBook(true); }} className="mt-auto">Book Appointment</Button>
          </div>
        ))}
      </div>
      {showBook && selectedDoctor && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative w-full max-w-md">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setShowBook(false)}>&times;</button>
            <BookAppointment onBooked={() => setShowBook(false)} doctorId={selectedDoctor._id} />
          </div>
        </div>
      )}
    </div>
  );
}
