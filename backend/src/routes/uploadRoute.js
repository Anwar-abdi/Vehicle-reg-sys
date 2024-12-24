const express = require('express');
const router = express.Router();
const { upload, uploadFileToFirebase } = require('../config/multerConfig');

router.post('/upload', upload, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const downloadURL = await uploadFileToFirebase(
      req.file.buffer,
      `uploads/${req.file.originalname}`,
      req.file.mimetype
    );

    res.json({ url: downloadURL });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
