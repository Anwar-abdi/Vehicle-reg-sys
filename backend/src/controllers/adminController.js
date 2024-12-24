const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const VehicleType = require('../models/VehicleType');
const Admin = require('../models/Admin');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find()
      .populate('owner', '-password')
      .populate('vehicleType');
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve/Reject vehicle registration
const updateVehicleStatus = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const { status, remarks } = req.body;

    const vehicle = await Vehicle.findByIdAndUpdate(
      vehicleId,
      {
        status,
        remarks,
        reviewedBy: req.user._id,
        reviewedAt: Date.now(),
      },
      { new: true }
    ).populate('owner', '-password');

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Manage vehicle types
const createVehicleType = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const vehicleType = new VehicleType({
      name,
      description,
      category,
    });
    await vehicleType.save();
    res.status(201).json(vehicleType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generate reports
const generateReport = async (req, res) => {
  try {
    const { type, startDate, endDate, region } = req.query;

    let query = {};

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    if (type) {
      query.vehicleType = type;
    }

    if (region) {
      query.region = region;
    }

    const vehicles = await Vehicle.find(query)
      .populate('owner', '-password')
      .populate('vehicleType');

    const report = {
      totalVehicles: vehicles.length,
      byStatus: {
        pending: vehicles.filter((v) => v.status === 'pending').length,
        approved: vehicles.filter((v) => v.status === 'approved').length,
        rejected: vehicles.filter((v) => v.status === 'rejected').length,
      },
      vehicles,
    };

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getAllVehicles,
  updateVehicleStatus,
  createVehicleType,
  generateReport,
};
