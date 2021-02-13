const express = require('express');
const connectDB = require('./config/db');
connectDB();
const app = express();

app.get('/', (req, res) => res.json({
    message: 'test'
}));

app.use('/api/testroutes', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));