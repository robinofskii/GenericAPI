const router = require('express').Router()
const Highscore = require('../models/Highscore')

router.post('/', async (req, res) => {
  const highscore = new Highscore({
    name: req.body.name,
    score: req.body.score,
    game: req.body.game
  })

  try {
    await highscore.save()
    res.send('Highscore has been saved!')
  } catch (err) {
    res.status(400).send(err)
  }
})

router.get('/', async (req, res) => {
  const highscores = await Highscore.find().sort({ score: -1 })
  if (!highscores) return res.status(400).send('No highscores found...')

  res.send(highscores)
})

module.exports = router
