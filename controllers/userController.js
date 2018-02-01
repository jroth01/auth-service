const sequelize = require('../db');
const Users = sequelize.import('../models/users.js');
const permissionController = require('./permissionController.js');

exports.users_get = (req, res) => {
  permissionController.hasPermission(req, res, 'get_users', () => {
    Users.findAll().then((users) => {
      res.status(200);
      res.json(users);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  });
};
