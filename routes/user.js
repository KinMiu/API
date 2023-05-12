const router = require('express').Router()
const userController = require('../controller/user')

router.post('/register', (req, res) => {
  userController.register(req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

router.post('/login', (req, res) => {
  userController.login(req.body)
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    res.json(err)
  })
})

module.exports = router