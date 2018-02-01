'use strict';
module.exports = (sequelize, DataTypes) => {
  var Accounts = sequelize.define('accounts', {
    accountID: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    name: DataTypes.STRING,
    planLevel: DataTypes.STRING
  });
  return Accounts;
};
