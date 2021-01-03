const router = require('express').Router()
const axios = require('axios').default

router.get('/', async (req, res) => {
  getAllPhotos()
    .then(data => {
      res.send(data)
    })
})

router.get('/random', async (req, res) => {
  getRandomPhoto()
    .then(data => {
      res.send(data)
    })
})

function getAllPhotos () {
  return axios.get(`${process.env.UNSPLASH_API}/photos`, {
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}

function getRandomPhoto () {
  return axios.get(`${process.env.UNSPLASH_API}/photos/random`, {
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` }
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}

module.exports = router
