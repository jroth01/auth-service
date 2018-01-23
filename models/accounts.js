'use strict';
module.exports = (sequelize, DataTypes) => {
  var Accounts = sequelize.define('accounts', {
    name: DataTypes.STRING,
    planLevel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Accounts;
};
