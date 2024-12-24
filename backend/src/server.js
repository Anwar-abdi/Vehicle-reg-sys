const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

// Connect to MongoDB with more detailed logging
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // List all collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('Error listing collections:', err);
      } else {
        console.log(
          'Available collections:',
          collections.map((c) => c.name)
        );
      }
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if can't connect to database
  });

// Routes - Make sure user routes come before any Multer middleware
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    'MongoDB URI:',
    process.env.MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//<credentials>@')
  ); // Safe logging of URI
});
