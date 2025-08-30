import DoctorSidebar from './DoctorSidebar';
import DoctorNavbar from './DoctorNavbar';
import { Outlet } from 'react-router-dom';

export default function DoctorLayout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
      <DoctorSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DoctorNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
