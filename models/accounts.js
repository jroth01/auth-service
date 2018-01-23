'use strict';
module.exports = (sequelize, DataTypes) => {
  var Accounts = sequelize.define('accounts', {
    accountID: {
       type: DataTypes.INTEGER,
       primaryKey: true
    },
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
