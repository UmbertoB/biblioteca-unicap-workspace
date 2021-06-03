'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Activities',
      'typeId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'ActivityTypes',
          key: 'id',
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Activities',
      'typeId'
    );
  }
};
