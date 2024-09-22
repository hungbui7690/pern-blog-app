const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-api.js')

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
    this.name = 'Bad Request Error'
  }
}

module.exports = BadRequestError
