const Vehicle = require('../models/Vehicle');
const { uploadFileToFirebase } = require('../config/multerConfig');

const registerVehicle = async (req, res) => {
  try {
    console.log('Files received:', req.files); // Debug log
    console.log('Body received:', req.body); // Debug log

    // Check if files exist
    if (!req.files) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    // Upload files to Firebase and get URLs
    const uploadPromises = [];
    const fileUrls = {};

    for (const [fieldName, files] of Object.entries(req.files)) {
      if (files && files[0]) {
        const file = files[0];
        const path = `vehicles/${Date.now()}-${file.originalname}`;
        uploadPromises.push(
          uploadFileToFirebase(file.buffer, path, file.mimetype).then((url) => {
            fileUrls[fieldName] = url;
          })
        );
      }
    }

    // Wait for all file uploads to complete
    await Promise.all(uploadPromises);

    // Create new vehicle document
    const vehicle = new Vehicle({
      owner: req.user._id, // From auth middleware
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      licensePlate: req.body.licensePlate,
      documents: {
        proofOfOwnership: fileUrls.proofOfOwnership,
        insurance: fileUrls.insurance,
        emissionTest: fileUrls.emissionTest,
      },
    });

    await vehicle.save();
    res.status(201).json({
      message: 'Vehicle registered successfully',
      vehicle,
    });
  } catch (error) {
    console.error('Vehicle registration error:', error); // Debug log
    res.status(500).json({
      error: 'Failed to register vehicle',
      details: error.message,
    });
  }
};

const getUserVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ owner: req.user._id });
    res.json(vehicles);
  } catch (error) {
    console.error('Get user vehicles error:', error);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

const getVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    console.error('Get vehicle error:', error);
    res.status(500).json({ error: 'Failed to fetch vehicle' });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id },
      { $set: req.body },
      { new: true }
    );
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    console.error('Update vehicle error:', error);
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error('Delete vehicle error:', error);
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
};

module.exports = {
  registerVehicle,
  getUserVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
};
