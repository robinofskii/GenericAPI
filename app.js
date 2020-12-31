const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// Routes import'
const postsRoute = require('./routes/posts')

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.use('/posts', postsRoute);



// Connect to Database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to database!')
    )

// Start listening on port
app.listen(process.env.PORT, () => {
    console.log('API running on port: ' + process.env.PORT);
});
