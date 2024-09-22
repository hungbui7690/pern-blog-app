const { StatusCodes } = require('http-status-codes')

class CustomAPIError extends Error {
  constructor(message) {
    let err = {}
    super(message)
    this.stack = new Error().stack
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = CustomAPIError
