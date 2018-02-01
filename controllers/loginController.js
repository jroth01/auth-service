const sequelize = require('../db');
const Logins = sequelize.import('../models/logins.js');
const Permissions = sequelize.import('../models/permissions.js');
const bcryptController = require('./bcryptController.js');
const tokenController = require('./tokenController.js');
const permissionController = require('./permissionController.js');

const assignToken = (login, res) => {
  Permissions.findAll({
    attributes: ['permissionName'],
    where: {
      relatedRoleID: login.relatedRoleID,
    },
  }).then((permissions) => {
    const permissionArray = permissions.map((obj) => obj.permissionName);
    const payload = {
       sub: login.relatedUserID,
       iss: 'auth-service',
       permissions: permissionArray,
    };
    const secret = tokenController.getSecret();
    const token = tokenController.getToken(payload, secret);
    res.json({token: token});
  }).catch((err) => {
    console.log(err);
    res.status(500);
    res.json({err: err});
  });
};

exports.login_post = (req, res) => {
  Logins.findOne({
    where: {
      userName: req.body.username,
    },
  }).then((login) => {
    if (!login) {
      res.status(400);
      res.json({err: 'No user registered with this email'});
    }
    const pass = req.body.password;
    const salt = login.passwordSalt;
    const hash = login.passwordHash;
    const isValid = bcryptController.checkPassword(pass, salt, hash);
    if (!isValid) {
      res.status(400);
      res.json({err: 'Password invalid'});
    } else {
      assignToken(login, res);
    }
  }).catch((err) => {
      console.log(err);
      res.status(500);
      res.json({err: err});
  });
};

exports.logins_get = (req, res) => {
  permissionController.hasPermission(req, res, 'get_logins', () => {
    Logins.findAll().then((permissions) => {
      res.status(200);
      res.json(permissions);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  });
};
