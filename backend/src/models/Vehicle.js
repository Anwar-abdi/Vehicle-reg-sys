const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    vin: { type: String, required: true, unique: true },
    licensePlate: { type: String, required: true },
    type: {
      type: String,
      enum: ['Car', 'Bus', 'Truck', 'Bicycle'],
      required: true,
    },
    documents: {
      proofOfOwnership: { type: String, required: true },
      insurance: { type: String, required: true },
      emissionTest: { type: String, default: null },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    remarks: String,
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    reviewedAt: Date,
  },
  { timestamps: true }
);

// Export the Vehicle model
module.exports = mongoose.model('Vehicle', vehicleSchema);
