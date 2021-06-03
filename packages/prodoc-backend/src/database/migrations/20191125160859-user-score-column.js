'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'score',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'score',
    );
  }
};
