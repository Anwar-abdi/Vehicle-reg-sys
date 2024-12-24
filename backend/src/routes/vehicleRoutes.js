const express = require('express');
const router = express.Router();
const { upload } = require('../config/multerConfig');
const vehicleController = require('../controllers/vehicleController');
const auth = require('../middleware/auth');

// Register vehicle
router.post('/register', auth, upload, vehicleController.registerVehicle);

// Get all vehicles for a user
router.get('/user', auth, vehicleController.getUserVehicles);

// Get specific vehicle
router.get('/:id', auth, vehicleController.getVehicle);

// Update vehicle
router.put('/:id', auth, upload, vehicleController.updateVehicle);

// Delete vehicle
router.delete('/:id', auth, vehicleController.deleteVehicle);

module.exports = router;
