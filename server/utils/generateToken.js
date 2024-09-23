require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateTokenAndSetCookie = (userId, res) => {
  const pernBlogToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  })

  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('pernBlogToken', pernBlogToken, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production', // # use only in PROD
    signed: true,
  })
}

module.exports = { generateTokenAndSetCookie }
