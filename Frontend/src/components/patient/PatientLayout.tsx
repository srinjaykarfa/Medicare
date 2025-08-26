import PatientSidebar from './PatientSidebar';
import PatientNavbar from './PatientNavbar';
import { Outlet } from 'react-router-dom';

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex">
        <PatientSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <PatientNavbar />
          <main className="flex-1 p-8 bg-gradient-to-br from-blue-50/30 via-white/80 to-blue-100/30 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
