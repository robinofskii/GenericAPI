const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const verify = require('../middleware/verifyToken')
const { registerValidation, loginValidation } = require('../validation/authValidation')

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const emailExists = await User.findOne({ email: req.body.email })
  if (emailExists) return res.status(400).send('Email already exists')

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })

  try {
    await user.save()
    res.send({ user: user._id })
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid email or password')

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Invalid email or password')

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
  res.header('auth-token', token).send(token)
})

router.get('/user', verify, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id })
  if (!user) return res.status(400).send('User not found')

  res.send({
    name: user.name,
    email: user.email,
    created_at: user.createdAt,
    updated_at: user.updatedAt
  })
})

module.exports = router
