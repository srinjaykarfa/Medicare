"use client"

import { useEffect, useState } from "react"
import api from "@/services/api"

export default function PatientAppointmentsList() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get("/appointments/my")
      .then((res) => setAppointments(res.data.appointments || []))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="text-gray-700">Loading appointments...</div>

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-2 text-gray-900">My Appointments</h3>
      {appointments.length === 0 && <div className="text-gray-700">No appointments found.</div>}
      {appointments.map((app) => (
        <div
          key={app._id}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-1">
            <div className="font-semibold text-gray-900">
              Doctor:{" "}
              <span className="text-gray-700">
                {app?.doctor?.fullName ||
                  `${app?.doctor?.firstName || ""} ${app?.doctor?.lastName || ""}`.trim() ||
                  "N/A"}
              </span>
            </div>
            <div className="text-sm text-gray-700">Specialization: {app?.doctor?.specialization || "N/A"}</div>
            <div className="text-sm text-gray-700">Date: {app.date}</div>
            <div className="text-sm text-gray-700">Time: {app.time}</div>
          </div>
          <div className="mt-3 md:mt-0">
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                app.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : app.status === "approved"
                    ? "bg-blue-100 text-blue-800"
                    : app.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
              }`}
            >
              {app.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
