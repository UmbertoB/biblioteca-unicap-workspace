'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
    }, { timestamps: false });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivityTypes');
  }
};