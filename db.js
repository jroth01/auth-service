// DB configuration
module.exports = function(Sequelize, config){

  // Create new sequelize instance by passing the configuration info
  const sequelize = new Sequelize('', config.username, config.password, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

}
