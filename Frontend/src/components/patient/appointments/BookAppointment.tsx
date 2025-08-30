import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import api from '@/services/api';

interface BookAppointmentProps {
  onBooked?: () => void;
  doctorId?: string;
}

export default function BookAppointment({ onBooked, doctorId: propDoctorId }: BookAppointmentProps) {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [doctorId, setDoctorId] = useState(propDoctorId || '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!propDoctorId) {
      api.get('/doctors')
        .then(res => setDoctors(res.data.data || []))
        .catch(() => setDoctors([]));
    }
  }, [propDoctorId]);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await api.post('/appointments', { doctorId, date, time });
      setSuccess('Appointment booked successfully!');
      setDoctorId(''); setDate(''); setTime('');
      if (onBooked) onBooked();
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleBook} className="space-y-4 bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-blue-200/20">
      <h3 className="text-xl font-bold mb-2 text-blue-300">Book Appointment</h3>
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {!propDoctorId && (
        <div>
          <Select onValueChange={setDoctorId} value={doctorId} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map(doc => (
                <SelectItem key={doc._id} value={doc._id}>{doc.fullName} ({doc.specialization})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div>
        <Input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </div>
      <div>
        <Input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Booking...' : 'Book Appointment'}</Button>
    </form>
  );
}
