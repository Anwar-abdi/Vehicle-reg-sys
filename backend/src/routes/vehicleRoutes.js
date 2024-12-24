const express = require('express');
const router = express.Router();
const { registerVehicle } = require('../controllers/vehicleController');

// POST request to register a vehicle
router.post('/register', registerVehicle);

module.exports = router;
