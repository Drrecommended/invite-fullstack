const express = require('express')
const axios = require('axios')

const router = express.Router()

const randomUser = {
  user: {},
  notGoing: [{}],
  going: [{}],
}


router.get('/', (req, res, next) => {
  axios.get('https://randomuser.me/api/').then(resp => {
     const response = resp.data.results[0]
     console.log(response)
     res.send({
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
  res.json(going)
})

router.get('/notGoing', (req, res, next) => {
  res.json(notGoing)
})

router.post('/add-user', (req, res, next) => {
  const user = req.body
  if (user.going) {
    going.push(user)
  } else {
    notGoing.push(user)
  }
})

module.exports = router


