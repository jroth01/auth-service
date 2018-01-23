'use strict';
module.exports = (sequelize, DataTypes) => {
  var Memberships = sequelize.define('memberships', {
    membershipID: {
       type: DataTypes.INTEGER,
       primaryKey: true
    },
    relatedUserID: DataTypes.INTEGER,
    relatedAccountID: DataTypes.INTEGER,
    relatedRoleID: DataTypes.INTEGER,
    membershipEmailAddress: {
      type: Sequelize.STRING,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.Memberships.hasOne(models.Accounts, { foreignKey: 'accountID' })
      }
    }
  });
  return Memberships;
};
