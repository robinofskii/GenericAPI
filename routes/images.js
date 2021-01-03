const router = require('express').Router()
const axios = require('axios').default

router.get('/', async (req, res) => {
  getPhotos()
    .then(data => {
      res.send(data)
    })
})

function getPhotos () {
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

module.exports = router
