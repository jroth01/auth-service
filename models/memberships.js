'use strict';
module.exports = (sequelize, DataTypes) => {
  var Memberships = sequelize.define('memberships', {
    membershipID: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    relatedUserID: DataTypes.INTEGER,
    relatedAccountID: DataTypes.INTEGER,
    membershipEmailAddress: DataTypes.STRING
  });
  Memberships.associate = function (models) {
    models.Memberships.hasOne(models.Accounts) // each membership has one account
    models.Memberships.hasOne(models.Users) // one user per membership
    models.Memberships.hasOne(models.Roles) //  each membership acts as a group, each of which corresponds to a role w/ permissions
  };
  return Memberships;
};
