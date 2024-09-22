const express = require('express')
const {
  login,
  signup,
  logout,
  getMe,
} = require('../controller/authController.js')
const authenticateUser = require('../middleware/authMiddleware.js')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/me', authenticateUser, getMe)

module.exports = router
