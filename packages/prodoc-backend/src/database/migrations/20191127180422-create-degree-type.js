'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DegreeTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      }
    }, { timestamps: false });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DegreeTypes');
  }
};