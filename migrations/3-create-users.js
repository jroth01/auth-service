'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      userID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      relatedRoleID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // foreign key on roles
          key: 'roleID'
        }
      },
      firstName: Sequelize.STRING(50),
      lastName: Sequelize.STRING(100),
      userName: {
        type: Sequelize.STRING(50),
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
