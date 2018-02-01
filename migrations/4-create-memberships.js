'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('memberships', {
      membershipID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      relatedUserID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // foreign key on users
          key: 'userID'
        }
      },
      relatedAccountID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts', // foreign key on accounts
          key: 'accountID'
        },
      },
      membershipEmailAddress: Sequelize.STRING,
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
    return queryInterface.dropTable('memberships');
  }
};
