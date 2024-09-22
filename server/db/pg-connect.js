const dotenv = require('dotenv')
dotenv.config()
const { Sequelize } = require('@sequelize/core')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  // ssl: process.env.NODE_ENV === 'production' && { rejectUnauthorized: false },
  // ssl: { rejectUnauthorized: false },
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    return sequelize
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { connectDB }
