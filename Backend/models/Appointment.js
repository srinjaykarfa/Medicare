const mongoose = require("mongoose")

const appointmentSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true }, // e.g., "2025-08-30"
    time: { type: String, required: true }, // e.g., "14:30"
    status: {
      type: String,
      enum: ["pending", "approved", "completed", "cancelled"],
      default: "pending",
    },
    notes: { type: String },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Simple index for faster lookups
appointmentSchema.index({ doctor: 1, date: 1, time: 1 })
appointmentSchema.index({ patient: 1, createdAt: -1 })

module.exports = mongoose.model("Appointment", appointmentSchema)
