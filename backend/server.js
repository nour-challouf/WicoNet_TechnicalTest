const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Use bodyParser and CORS middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Nour:nour12@cluster0.vj9yuvt.mongodb.net/WicoNet?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if MongoDB connection fails
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', (req, res, next) => {
    console.log('Product routes middleware triggered');
    next();
}, productRoutes);

// Handle errors for unknown routes
app.use((req, res, next) => {
    res.status(404).send({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
});
