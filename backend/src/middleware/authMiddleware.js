const jwt = require('jsonwebtoken');

// Protect routes with JWT
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Access denied, no token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user information from the token
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Access denied, token expired' });
    }
    res.status(400).json({ message: 'Access denied, invalid token' });
  }
};

// Admin check
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Admin user, proceed
  } else {
    res.status(403).json({ message: 'Access denied, not an admin' });
  }
};

module.exports = { protect, admin };
