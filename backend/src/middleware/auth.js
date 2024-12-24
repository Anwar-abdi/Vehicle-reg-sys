const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res
        .status(401)
        .json({ error: 'No authentication token, authorization denied' });
    }

    // Verify token and decode
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Debug log

    // Check if decoded has the correct user ID field
    if (!decoded.id && !decoded.userId) {
      throw new Error('Invalid token structure');
    }

    // Try both possible ID fields
    const userId = decoded.id || decoded.userId;
    console.log('Looking for user with ID:', userId); // Debug log

    // Find user by id
    const user = await User.findOne({ _id: userId });
    console.log('Found user:', user ? 'Yes' : 'No'); // Debug log

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(401).json({
      error: 'Authentication failed',
      details: error.message,
    });
  }
};

module.exports = auth;
