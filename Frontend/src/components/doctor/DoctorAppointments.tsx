"use client"

import { useEffect, useState } from "react"
import api from "@/services/api"
import { Button } from "@/components/ui/button"

type Appointment = {
  _id: string
  date: string
  time: string
  status: "pending" | "approved" | "completed" | "cancelled"
  patient?: { fullName?: string; firstName?: string; lastName?: string; email?: string }
}

function StatusBadge({ status }: { status: Appointment["status"] }) {
  const map: Record<Appointment["status"], string> = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  }
  return <span className={`px-2 py-1 rounded text-xs font-medium ${map[status]}`}>{status}</span>
}

export default function DoctorAppointments() {
  const [items, setItems] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get("/appointments/doctor")
      const list: Appointment[] = res.data.appointments || []
      setItems(list)
    } catch (e: any) {
      setError(e?.response?.data?.message || "Failed to load appointments")
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const getName = (p?: Appointment["patient"]) => {
    if (!p) return "Patient"
    const full = p.fullName?.trim()
    if (full) return full
    const combined = `${p.firstName || ""} ${p.lastName || ""}`.trim()
    if (combined) return combined
    if (p.email) return p.email.split("@")[0]
    return "Patient"
  }

  const updateStatus = async (id: string, status: Appointment["status"]) => {
    setUpdatingId(id)
    try {
      await api.patch(`/appointments/${id}/status`, { status })
      await load()
    } catch (e) {
      // no-op, error surface via load if needed
    } finally {
      setUpdatingId(null)
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">My Appointments</h2>

      {loading && <div className="text-gray-700">Loading...</div>}
      {!loading && error && (
        <div className="rounded border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</div>
      )}
      {!loading && !error && items.length === 0 && (
        <div className="rounded border border-gray-200 bg-white px-4 py-6 text-gray-700">No appointments yet.</div>
      )}

      {!loading && !error && items.length > 0 && (
        <div className="space-y-4">
          {items.map((a) => (
            <div key={a._id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-gray-900">{getName(a.patient)}</div>
                  <div className="text-sm text-gray-700">
                    Date: <span className="font-medium">{a.date}</span> • Time:{" "}
                    <span className="font-medium">{a.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={a.status} />
                  <div className="flex gap-2">
                    {a.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateStatus(a._id, "approved")}
                          disabled={updatingId === a._id}
                        >
                          {updatingId === a._id ? "Updating..." : "Approve"}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(a._id, "cancelled")}
                          disabled={updatingId === a._id}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {a.status === "approved" && (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => updateStatus(a._id, "completed")}
                          disabled={updatingId === a._id}
                        >
                          Mark Completed
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(a._id, "cancelled")}
                          disabled={updatingId === a._id}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
