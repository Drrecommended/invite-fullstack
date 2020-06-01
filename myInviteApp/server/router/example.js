const express = require('express')
const axios = require('axios')

const router = express.Router()

const randomUser = {
  user: {},
  notGoing: [{}],
  going: [{}],
}


router.get('/randomUser', (req, res, next) => {
  console.log('hello')
  axios.get('https://randomuser.me/api/').then(resp => {
     console.log(resp.data) 
     res.send(resp.data.results[0])
    })
})

module.exports = router


