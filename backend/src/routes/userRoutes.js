const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  registerUser,
  loginUser,
  updateProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Configure multer only for routes that need it
const upload = multer({ dest: 'uploads/' });

// Routes without file upload
router.post('/register', registerUser);
router.post('/login', loginUser);

// Routes with file upload (if any)
router.put(
  '/updateProfile',
  protect,
  upload.single('profileImage'),
  updateProfile
);

module.exports = router;
