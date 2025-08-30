"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import api from "@/services/api"
import BookAppointment from "./BookAppointment"

type Doctor = {
  _id: string
  fullName?: string
  firstName?: string
  lastName?: string
  email?: string
  specialization?: string
  hospital?: string
  yearsOfExperience?: number
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [showBook, setShowBook] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(null)
    api
      .get("/doctors")
      .then((res) => {
        const list = Array.isArray(res?.data?.data) ? res.data.data : []
        setDoctors(list)
      })
      .catch((err) => {
        console.log("[v0] /doctors fetch error:", err?.message)
        setError("Unable to load doctors right now.")
        setDoctors([])
      })
      .finally(() => setLoading(false))
  }, [])

  const getDoctorName = (doc: Doctor) => {
    // Prefer server virtual 'fullName'; fallbacks ensure no "undefined undefined"
    if (doc?.fullName && doc.fullName.trim().length > 0) return doc.fullName
    const first = doc?.firstName?.trim() || ""
    const last = doc?.lastName?.trim() || ""
    const combined = `${first} ${last}`.trim()
    if (combined.length > 0) return combined
    if (doc?.email) return doc.email.split("@")[0]
    return "Doctor"
  }

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div className="text-sm text-gray-600">
      <span className="font-medium text-gray-700">{label}:</span> {value}
    </div>
  )

  const SkeletonCard = () => (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="h-5 w-40 rounded bg-gray-200 mb-3" />
      <div className="space-y-2">
        <div className="h-4 w-52 rounded bg-gray-200" />
        <div className="h-4 w-44 rounded bg-gray-200" />
        <div className="h-4 w-32 rounded bg-gray-200" />
      </div>
      <div className="mt-4 h-9 w-40 rounded bg-gray-200" />
    </div>
  )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-balance">Available Doctors</h2>

      {/* Loading state */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      {/* Empty state */}
      {!loading && !error && doctors.length === 0 && (
        <div className="rounded-lg border border-gray-200 bg-white px-4 py-6 text-center">
          <p className="text-gray-800 font-medium">No doctors available</p>
          <p className="text-gray-600 text-sm mt-1">
            Only doctors saved in your database will appear here (verified or unverified).
          </p>
        </div>
      )}

      {/* Doctors grid */}
      {!loading && !error && doctors.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => {
            const name = getDoctorName(doc)
            const specialization = doc?.specialization?.trim() || "N/A"
            const hospital = doc?.hospital?.trim() || "N/A"
            const experience = typeof doc?.yearsOfExperience === "number" ? `${doc.yearsOfExperience} years` : "N/A"

            return (
              <div
                key={doc._id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-2 text-lg font-semibold text-gray-900">{name}</div>
                <div className="space-y-1.5">
                  <InfoRow label="Specialization" value={specialization} />
                  <InfoRow label="Hospital" value={hospital} />
                  <InfoRow label="Experience" value={experience} />
                </div>

                <Button
                  onClick={() => {
                    setSelectedDoctor(doc)
                    setShowBook(true)
                  }}
                  className="mt-4"
                >
                  Book Appointment
                </Button>
              </div>
            )
          })}
        </div>
      )}

      {/* Modal for booking */}
      {showBook && selectedDoctor && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl relative w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowBook(false)}
              aria-label="Close booking dialog"
            >
              &times;
            </button>
            <BookAppointment onBooked={() => setShowBook(false)} doctorId={selectedDoctor._id} />
          </div>
        </div>
      )}
    </div>
  )
}
