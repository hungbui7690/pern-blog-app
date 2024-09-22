const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-api.js')

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
    this.name = 'Unauthorized Error'
  }
}

module.exports = UnauthorizedError
