'use strict';
module.exports = (sequelize, DataTypes) => {
  var Memberships = sequelize.define('memberships', {
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
        // models.Memberships.hasOne(models.Accounts)
        // models.Memberships.hasMany(models.Users)
        // associations can be defined here
      }
    }
  });
  return Memberships;
};
