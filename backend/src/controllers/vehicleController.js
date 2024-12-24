const Vehicle = require('../models/Vehicle'); // Assuming the Vehicle model is in the 'models' directory

// Register vehicle route
exports.registerVehicle = async (req, res) => {
  try {
    // Destructure data from the request body
    const { make, model, year, vin, licensePlate, type, owner } = req.body;

    // Ensure all required fields are provided
    if (!make || !model || !year || !vin || !licensePlate || !type || !owner) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new vehicle record
    const newVehicle = new Vehicle({
      make,
      model,
      year,
      vin,
      licensePlate,
      type,
      owner,
    });

    // Save to the database
    await newVehicle.save();

    // Respond with the new vehicle
    res.status(200).json(newVehicle);
  } catch (error) {
    console.error('Error during vehicle registration:', error);
    res.status(500).json({ message: 'Error registering vehicle' });
  }
};
