'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Roles', [
      {
        id: '1',
        title: 'Professor Auxiliar',
        scoreNeeded: null,
        degreeNeeded: null,
      },
      {
        id: '2',
        title: 'Professor Assistente I',
        scoreNeeded: 20,
        degreeNeeded: 3
      },
      {
        id: '3',
        title: 'Professor Assistente II',
        scoreNeeded: 50,
        degreeNeeded: 4
      },
      {
        id: '4',
        title: 'Professor Assistente III',
        scoreNeeded: 100,
        degreeNeeded: 4
      },
      {
        id: '5',
        title: 'Professor Assistente IV',
        scoreNeeded: 160,
        degreeNeeded: 4
      },
      {
        id: '6',
        title: 'Professor Adjunto I',
        scoreNeeded: 310,
        degreeNeeded: 4
      },
      {
        id: '7',
        title: 'Professor Adjunto II',
        scoreNeeded: 460,
        degreeNeeded: 4
      },
      {
        id: '8',
        title: 'Professor Adjunto III',
        scoreNeeded: 610,
        degreeNeeded: 4
      },
      {
        id: '9',
        title: 'Professor Adjunto IV',
        scoreNeeded: 760,
        degreeNeeded: 4
      },
      {
        id: '10',
        title: 'Professor Titular',
        scoreNeeded: 1060,
        degreeNeeded: 4
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
