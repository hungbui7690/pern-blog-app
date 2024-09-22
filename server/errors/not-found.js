const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-api.js')

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
    this.name = 'NotFound Error'
  }
}

module.exports = NotFoundError
