'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('users', {
    userID: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    relatedRoleID:DataTypes.INTEGER,
    firstName: DataTypes.STRING(50),
    lastName: DataTypes.STRING(100),
    userName: {
      type: DataTypes.STRING(50),
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  });
  return Users;
};
