'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define(
    'Posts',
    {
      title: sequelize.STRING,
      desc: sequelize.TEXT,
      body: sequelize.TEXT,
      image: sequelize.STRING,
      userId: {
        type: sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {}
  )

  Posts.associate = function (models) {
    Posts.belongsTo(models.Users, {
      foreignKey: 'userId',
    })
  }

  return Posts
}
