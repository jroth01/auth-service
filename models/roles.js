'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('roles', {
    roleID: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    roleName: DataTypes.STRING,
    relatedAccountID: DataTypes.INTEGER,
    roleEmail: {
      type: DataTypes.STRING, // ex: admin@company.com
      unique: true
    }
  });
  Roles.associate = function (models) {
    models.Roles.hasOne(models.Accounts)
  };
  return Roles;
};
