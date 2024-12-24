const { body, validationResult } = require('express-validator');

const validateVehicleRegistration = [
  body('make').notEmpty().withMessage('Make is required'),
  body('model').notEmpty().withMessage('Model is required'),
  body('year').isInt({ min: 1886 }).withMessage('Valid year is required'),
  body('vin').notEmpty().withMessage('VIN is required'),
  body('licensePlate').notEmpty().withMessage('License Plate is required'),
  body('type').notEmpty().withMessage('Type is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateVehicleRegistration };