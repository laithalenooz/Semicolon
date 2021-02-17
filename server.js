const express = require('express');
const connectDB = require('./config/db');
const {check} = require("express-validator");
const app = express();

//connect to db
connectDB();

// Init Middleware
app.use(express.json({extended: false}));


// Defining Routes
app.use('/api/users', require('./routes/API/users'));
app.use('/api/auth', require('./routes/API/auth'));
app.use('/api/profile', require('./routes/API/profile'));
app.use('/api/posts', require('./routes/API/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));