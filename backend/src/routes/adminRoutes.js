const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

router.use(auth);
router.use(adminAuth);

router.get('/dashboard', adminController.getDashboardStats);
router.get('/vehicles', adminController.getAllVehicles);
router.put('/vehicles/:id/approve', adminController.approveVehicle);
router.put('/vehicles/:id/reject', adminController.rejectVehicle);

module.exports = router;
