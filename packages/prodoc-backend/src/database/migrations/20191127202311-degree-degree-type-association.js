'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Degrees',
      'typeId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'DegreeTypes',
          key: 'id',
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Degrees',
      'typeId'
    );
  }
};
