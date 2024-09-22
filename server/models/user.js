'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  })

  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
    })
  }

  return User
}
