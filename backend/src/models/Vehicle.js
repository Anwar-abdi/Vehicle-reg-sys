// vehicle.js (Model file)
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  vin: { type: String, required: true },
  licensePlate: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: String, required: true },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
