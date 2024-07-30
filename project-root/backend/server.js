const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
connectDB();
app.use(bodyParser.json());

// API routes
app.use('/api/auth', authRoutes);

// Serve frontend files
app.use(express.static('../frontend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
