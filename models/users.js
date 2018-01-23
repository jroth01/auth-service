'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('users', {
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
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};
