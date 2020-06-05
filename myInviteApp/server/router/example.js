const express = require('express')
const axios = require('axios')

const router = express.Router()

const randomUser = {
  user: {},
  notGoing: [],
  going: [],
}


router.get('/', (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(resp => {
     const response = resp.data.results[0]
     console.log(response)
     res.json({
       picture: response.picture.large,
       first: response.name.first,
       last: response.name.last,
       phone: response.phone,
       email: response.email
     })
    })
})

router.get('/going', (req, res, next) => {
  console.log('called2')
  res.json(randomUser.going)
})

router.get('/not-going', (req, res, next) => {
  res.json(randomUser.notGoing)
})

router.post('/add-user', (req, res, next) => {
  const user = req.body
  if (user.going) {
    randomUser.going.push(user)
  } else {
   randomUser.notGoing.push(user)
  }
  res.json(user)
})

module.exports = router


