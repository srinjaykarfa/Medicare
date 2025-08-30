const express = require("express")
const { protect, authorize } = require("../middleware/auth")
const Appointment = require("../models/Appointment")
const User = require("../models/User")

const router = express.Router()

// @desc    Create appointment (patient)
// @route   POST /api/appointments
// @access  Private/Patient
router.post("/", protect, authorize("patient"), async (req, res) => {
  try {
    const { doctorId, date, time, notes } = req.body

    if (!doctorId || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "doctorId, date and time are required",
      })
    }

    const doctor = await User.findById(doctorId)
    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      })
    }

    const appointment = await Appointment.create({
      patient: req.user._id,
      doctor: doctor._id,
      date,
      time,
      notes,
    })

    const populated = await Appointment.findById(appointment._id)
      .populate("doctor", "firstName lastName specialization hospital")
      .populate("patient", "firstName lastName")

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      data: populated,
    })
  } catch (error) {
    console.error("Create appointment error:", error)
    return res.status(500).json({
      success: false,
      message: "Server error creating appointment",
    })
  }
})

// @desc    Get current patient's appointments
// @route   GET /api/appointments/my
// @access  Private/Patient
router.get("/my", protect, authorize("patient"), async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user._id })
      .sort({ createdAt: -1 })
      .populate("doctor", "firstName lastName specialization hospital")

    // Frontend expects doctor.fullName; include a computed fullName field
    const withVirtualFullName = appointments.map((a) => {
      const doc = a.doctor ? a.doctor.toObject({ virtuals: true }) : null
      if (doc) {
        doc.fullName = `${doc.firstName || ""} ${doc.lastName || ""}`.trim()
      }
      const obj = a.toObject({ virtuals: true })
      obj.doctor = doc
      return obj
    })

    return res.status(200).json({
      success: true,
      appointments: withVirtualFullName,
    })
  } catch (error) {
    console.error("Get patient appointments error:", error)
    return res.status(500).json({
      success: false,
      message: "Server error fetching appointments",
    })
  }
})

// @desc    Get current doctor's appointments
// @route   GET /api/appointments/doctor
// @access  Private/Doctor
router.get("/doctor", protect, authorize("doctor"), async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctor: req.user._id })
      .sort({ createdAt: -1 })
      .populate("patient", "firstName lastName email phone")

    const normalized = appointments.map((a) => {
      const pat = a.patient ? a.patient.toObject({ virtuals: true }) : null
      if (pat) {
        pat.fullName = `${pat.firstName || ""} ${pat.lastName || ""}`.trim()
      }
      const obj = a.toObject({ virtuals: true })
      obj.patient = pat
      return obj
    })

    return res.status(200).json({
      success: true,
      appointments: normalized,
    })
  } catch (error) {
    console.error("Get doctor appointments error:", error)
    return res.status(500).json({
      success: false,
      message: "Server error fetching doctor appointments",
    })
  }
})

// @desc    Allow doctors to update appointment status (approve/cancel/complete) for their own appointments
// @route   PATCH /api/appointments/:id/status
// @access  Private/Doctor
router.patch("/:id/status", protect, authorize("doctor"), async (req, res) => {
  try {
    const { status } = req.body
    const allowed = ["approved", "cancelled", "completed"]
    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed: ${allowed.join(", ")}`,
      })
    }

    // Ensure the authenticated doctor owns this appointment
    const appt = await Appointment.findById(req.params.id)
    if (!appt) {
      return res.status(404).json({ success: false, message: "Appointment not found" })
    }
    if (appt.doctor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Not authorized to update this appointment" })
    }

    appt.status = status
    await appt.save()

    const populated = await Appointment.findById(appt._id)
      .populate("patient", "firstName lastName email")
      .populate("doctor", "firstName lastName specialization")

    return res.status(200).json({
      success: true,
      message: "Appointment status updated",
      data: populated,
    })
  } catch (error) {
    console.error("Update appointment status error:", error)
    return res.status(500).json({
      success: false,
      message: "Server error updating appointment status",
    })
  }
})

module.exports = router
