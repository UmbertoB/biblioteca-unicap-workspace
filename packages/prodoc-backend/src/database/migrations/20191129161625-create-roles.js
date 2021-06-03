'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING
      },

      degreeNeeded: {
        type: Sequelize.INTEGER
      },

      scoreNeeded: {
        type: Sequelize.INTEGER
      }

    }, { timestamps: false });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }
};