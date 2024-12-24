const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to create JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// User Registration
exports.registerUser = async (req, res) => {
  const { username, email, password, phone } = req.body;

  // Check for missing fields
  if (!username || !email || !password || !phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Validate email format
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'user already exists' });
    }

    // Hash the password before saving it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
    });
    await newUser.save();

    const token = createToken(newUser._id);

    res.status(201).json({ user: { username, email, phone }, token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt for email:', email); // Debug log

    // Find the user by email
    const user = await User.findOne({ email });
    console.log('User found:', user ? 'Yes' : 'No'); // Debug log

    if (!user) {
      console.log('User not found for email:', email); // Debug log
      return res.status(401).json({
        message: 'Invalid credentials: user not found',
        debug: 'No user with this email exists',
      });
    }

    // Compare the password
    const isPasswordValid = await user.comparePassword(password);
    console.log('Password valid:', isPasswordValid); // Debug log

    if (!isPasswordValid) {
      console.log('Invalid password for user:', email); // Debug log
      return res.status(401).json({
        message: 'Invalid credentials: wrong password',
        debug: 'Password does not match',
      });
    }

    // Create token
    const token = createToken(user._id);

    // Send response
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      token: token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
};

// Profile Update
exports.updateProfile = async (req, res) => {
  const { username, email, phone } = req.body;

  // Ensure that at least one field is provided
  if (!username && !email && !phone) {
    return res.status(400).json({ message: 'No fields to update' });
  }

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
};
