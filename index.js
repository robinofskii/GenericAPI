const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes import
const authRoute = require('./routes/auth')
const highscoreRoute = require('./routes/highscore')

// Routes Middlewares
app.use('/auth', authRoute)
app.use('/highscores', highscoreRoute)

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
app.listen(
  process.env.PORT,
  () => console.log(`API running on port: ${process.env.PORT}`)
)
