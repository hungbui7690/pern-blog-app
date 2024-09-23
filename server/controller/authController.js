const { BadRequestError } = require('../errors')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')
const { generateTokenAndSetCookie } = require('../utils/generateToken')

const register = async (req, res) => {
  const { username, email, password, image } = req.body

  if (!username || !email || !password) {
    throw new BadRequestError('All fields are required')
  }

  const userAlreadyExists = await User.findOne({ where: { username } })
  if (userAlreadyExists) throw new BadRequestError('User already exists')

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    image: image || '/avatar.png',
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  generateTokenAndSetCookie(user.id, res)

  user.password = undefined

  res.status(StatusCodes.CREATED).json({
    msg: 'User created successfully',
    user,
  })
}

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    throw new BadRequestError('All fields are required')
  }

  const user = await User.findOne({ where: { username } })
  if (!user) throw new BadRequestError('User does not exist in our system')

  const isPasswordCorrect = bcrypt.compareSync(password, user.password)
  if (!isPasswordCorrect) throw new BadRequestError('Invalid credentials')

  generateTokenAndSetCookie(user.id, res)

  user.password = undefined

  res.status(StatusCodes.CREATED).json({
    msg: 'Logged in successfully',
    user,
  })
}

const logout = async (req, res) => {
  res.clearCookie('pernBlogToken')
  res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Logged out successfully' })
}

module.exports = {
  register,
  login,
  logout,
}
