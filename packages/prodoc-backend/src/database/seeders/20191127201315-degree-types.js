'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('DegreeTypes', [
      {
        id: '1',
        title: 'Graduação',
      },
      {
        id: '2',
        title: 'Pós-Graduação',
      },
      {
        id: '3',
        title: 'Mestrado',
      },
      {
        id: '4',
        title: 'Doutorado',
      },
      {
        id: '5',
        title: 'Pós-Doutorado',
      },
      {
        id: '6',
        title: 'Livre-Docência',
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DegreeTypes', null, {});
  }
};
