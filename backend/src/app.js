const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const foodRoutes = require('./routes/food_routes');
const authRoutes = require('./routes/auth_Routes');

// Middleware
app.use(cors({
    origin: ["http://localhost:3000"], 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/food', foodRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
