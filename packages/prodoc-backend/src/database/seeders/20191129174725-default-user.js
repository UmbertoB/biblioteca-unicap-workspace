'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [
      {
        id: '1',
        name: 'Umberto Tenório de Barros',
        email: 'umberto@prodoc.com',
        password: '$2a$10$8fqGzu/Qf5n2nJpgCOb9S.l/MLPclycdHr8t6RKhfR7zzdolLiqVi',
        createdAt: '2019-11-25 07:05:08',
        updatedAt: '2019-11-25 07:05:08',
        score: '20',
        roleId: '1',
      },
    ], {});

  },


  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
'1', 'Umberto Tenório de Barros', 'admin@prodoc.com', '$2a$10$8fqGzu/Qf5n2nJpgCOb9S.l/MLPclycdHr8t6RKhfR7zzdolLiqVi', '2019-11-25 07:05:08', '2019-11-26 15:23:59', '0'
