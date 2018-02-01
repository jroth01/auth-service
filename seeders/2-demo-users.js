'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
          userID: 1,
          firstName: 'Admin',
          lastName: 'User',
          userName: 'admin@test.com',
          email: 'admin@test.com',
          relatedRoleID: 1,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          userID: 2,
          firstName: 'Regular',
          lastName: 'User',
          userName: 'user@test.com',
          email: 'user@test.com',
          relatedRoleID: 2,
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
