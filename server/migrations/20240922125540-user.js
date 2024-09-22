'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      image: Sequelize.STRING,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  },
}
