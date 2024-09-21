import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
    this.name = 'NotFound Error'
  }
}

export default NotFoundError
