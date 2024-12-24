const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const roleEnum = ['user', 'admin']; // Enum for user roles

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: {
    type: String,
    enum: roleEnum,
    default: 'user',
  },
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }],
});

// Pre-save middleware to hash the password before saving the user document
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  try {
    console.log('Comparing passwords...'); // Debug log
    const isMatch = await bcrypt.compare(password, this.password);
    console.log('Password match:', isMatch); // Debug log
    return isMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
};

// Export the User model
module.exports = mongoose.model('User', userSchema);
