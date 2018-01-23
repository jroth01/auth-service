'use strict';
module.exports = (sequelize, DataTypes) => {
  var Logins = sequelize.define('logins', {
    userName: {
      type: DataTypes.STRING(50),
      unique: true
    },
    passwordSalt: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    relatedUserID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Logins;
};
