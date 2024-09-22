const express = require('express')
const dotenv = require('dotenv').config()
require('express-async-errors')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const notFoundMiddleware = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
const { connectDB } = require('./db/pg-connect.js')
const authRouter = require('./routes/authRoutes.js')

app.use(express.json())
app.use(fileUpload({ useTempFiles: true }))
app.use(cookieParser(process.env.JWT_SECRET))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}...`)
})
