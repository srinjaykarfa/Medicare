const express = require("express")
const User = require("../models/User")

const router = express.Router()

// @desc    Get all doctors (public)
// @route   GET /api/doctors
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { specialization, page = 1, limit = 10 } = req.query

    const query = { role: "doctor" }
    if (specialization) query.specialization = specialization

    const doctors = await User.find(query)
      .select("-password")
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort({ createdAt: -1 })

    const total = await User.countDocuments(query)

    res.status(200).json({
      success: true,
      count: doctors.length,
      total,
      page: Number.parseInt(page),
      pages: Math.ceil(total / limit),
      data: doctors,
    })
  } catch (error) {
    console.error("Get doctors (alias) error:", error)
    res.status(500).json({
      success: false,
      message: "Server error getting doctors",
    })
  }
})

module.exports = router
