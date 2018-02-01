'use strict';
module.exports = (sequelize, DataTypes) => {
  var Logins = sequelize.define('logins', {
    loginID: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(50),
      unique: true
    },
    relatedRoleID: DataTypes.INTEGER,
    passwordSalt: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    relatedUserID: DataTypes.INTEGER
  });
  Logins.associate = function (models) {
    models.Logins.hasOne(models.Users) // each membership has one account
  };
  return Logins;
};
