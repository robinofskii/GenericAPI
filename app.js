import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'

const app = express();
dotenv.config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})

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
