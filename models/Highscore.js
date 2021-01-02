const mongoose = require('mongoose')

const highscoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  score: {
    type: Number,
    required: true
  },
  game: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Topscore', highscoreSchema)
