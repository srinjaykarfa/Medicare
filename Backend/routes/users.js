
const express = require('express');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// @desc    Verify a doctor (Admin only)
// @route   PUT /api/users/:id/verify
// @access  Private/Admin
router.put('/:id/verify', protect, authorize('admin'), async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    if (user.role !== 'doctor') {
      return res.status(400).json({
        success: false,
        message: 'User is not a doctor'
      });
    }
    user.isVerified = true;
    await user.save();
    res.status(200).json({
      success: true,
      message: 'Doctor verified successfully',
      data: user
    });
  } catch (error) {
    console.error('Verify doctor error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error verifying doctor'
    });
  }
});

// @desc    Get all users (Admin only)
// @route   GET /api/users
// @access  Private/Admin
router.get('/', protect, authorize('admin'), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting users'
    });
  }
});

// @desc    Get all doctors
// @route   GET /api/users/doctors
// @access  Public
router.get('/doctors', async (req, res) => {
  try {
    const { specialization, page = 1, limit = 10 } = req.query;
    
    let query = { 
      role: 'doctor'
    };
    
    if (specialization) {
      query.specialization = specialization;
    }
    
    const doctors = await User.find(query)
      .select('-password')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    
    const total = await User.countDocuments(query);
    
    res.status(200).json({
      success: true,
      count: doctors.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: doctors
    });
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting doctors'
    });
  }
});

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Check if user is accessing their own profile or is admin
    if (req.user.id !== user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this profile'
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting user'
    });
  }
});

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Check if user is updating their own profile or is admin
    if (req.user.id !== user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this profile'
      });
    }
    
    // Fields that should not be updated through this route
    const restrictedFields = ['password', 'role', 'isEmailVerified'];
    restrictedFields.forEach(field => delete req.body[field]);
    
    // Update user
    user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select('-password');
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Update user error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error updating user'
    });
  }
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    await User.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error deleting user'
    });
  }
});

// @desc    Get user statistics (Admin only)
// @route   GET /api/users/stats/overview
// @access  Private/Admin
router.get('/stats/overview', protect, authorize('admin'), async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPatients = await User.countDocuments({ role: 'patient' });
    const totalDoctors = await User.countDocuments({ role: 'doctor' });
    const verifiedDoctors = await User.countDocuments({ role: 'doctor', isVerified: true });
    const activeUsers = await User.countDocuments({ isActive: true });
    
    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalPatients,
        totalDoctors,
        verifiedDoctors,
        activeUsers,
        inactiveUsers: totalUsers - activeUsers
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting statistics'
    });
  }
});

module.exports = router;
