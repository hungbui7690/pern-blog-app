const CustomError = require('./custom-api.js')
const UnauthenticatedError = require('./unauthenticated.js')
const NotFoundError = require('./not-found.js')
const BadRequestError = require('./bad-request.js')
const UnauthorizedError = require('./unauthorized.js')

module.exports = {
  CustomError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
}
