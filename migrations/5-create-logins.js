'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logins', {
      loginID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING(50),
        unique: true
      },
      passwordSalt: Sequelize.STRING,
      passwordHash: Sequelize.STRING,
      relatedUserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // foreign key on users
          key: 'userID'
        },
      },
      relatedRoleID:{
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // foreign key on users
          key: 'roleID'
        },
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
    return queryInterface.dropTable('logins');
  }
};
