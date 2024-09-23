const { UnauthenticatedError, NotFoundError } = require('../errors/index.js')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenticateUser = async (req, res, next) => {
  // get token from signed cookie
  const token = req.signedCookies.pernBlogToken
  if (!token) {
    throw new UnauthenticatedError('Unauthenticated - No Token Provided')
  }

  // verify token -> decode = {userId}
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded) {
    throw new UnauthenticatedError('Unauthenticated - Invalid Token')
  }
  console.log(decoded)

  // find user from userId return from token
  const user = await User.findOne({
    where: { id: decoded.userId },
    attributes: { exclude: ['password'] },
  })
  if (!user) {
    throw new NotFoundError('User not found')
  }

  // attach user to req object
  req.user = user

  next()
}

module.exports = authenticateUser
