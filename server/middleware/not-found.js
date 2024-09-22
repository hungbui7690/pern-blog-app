const { StatusCodes } = require('http-status-codes')

const NotFoundMiddleware = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json('Route does not exist')
}

module.exports = NotFoundMiddleware
