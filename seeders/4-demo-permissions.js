'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('permissions', [
        {
          permissionName: 'get_users',
          relatedRoleID: 1,
          resourceName: 'users',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'get_memberships',
          relatedRoleID: 1,
          resourceName: 'memberships',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'get_permissions',
          relatedRoleID: 1,
          resourceName: 'permissions',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'post_permissions',
          relatedRoleID: 1,
          resourceName: 'permissions',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'delete_permissions',
          relatedRoleID: 1,
          resourceName: 'permissions',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'get_roles',
          relatedRoleID: 1,
          resourceName: 'roles',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'patch_roles',
          relatedRoleID: 1,
          resourceName: 'roles',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'get_accounts',
          relatedRoleID: 1,
          resourceName: 'accounts',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        },
        {
          permissionName: 'get_logins',
          relatedRoleID: 1,
          resourceName: 'logins',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW')
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('permissions', null, {});
  }
};
