const sequelize = require('../db');
const permissionController = require('./permissionController.js');
const Roles = sequelize.import('../models/roles.js');

exports.roles_get = (req, res) => {
  permissionController.hasPermission(req, res, 'get_roles', () => {
    Roles.findAll().then((roles) => {
      res.status(200);
      res.json(roles);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json();
    });
  });
};

exports.roles_post = (req, res) => {
  permissionController.hasPermission(req, res, 'post_roles', () => {
    if (req.body.roleName) {
      Roles.create({
        roleName: req.body.roleName,
        roleEmail: req.body.roleEmail,
        relatedAccountID: req.body.relatedAccountID,
      })
      .then((createdPermission) => {
        res.status(201);
        return res.json({});
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json();
      });
    } else {
      res.status(400);
      res.send();
    }
  });
};

exports.role_get = (req, res) => {
  if (req.params.id) {
    Roles.findOne({
      where: {
        roleID: req.params.id,
      },
    })
    .then((role) => {
      res.status(200);
      res.json(role);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json();
    });
  } else {
    res.status(400);
    res.json();
  }
};

exports.role_patch = (req, res) => {
  permissionController.hasPermission(req, res, 'patch_roles', () => {
    if (req.params.id) {
      Roles.update({
        roleName: req.body.permissionName,
        relatedRoleID: req.body.relatedAccountID,
        roleEmail: req.body.roleEmail,
      }, {
        where: {
          roleID: req.params.id,
        },
      })
      .then((updatedRole) => {
        res.status(204);
        return res.json({});
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json();
      });
    } else {
      res.status(400);
      res.json();
    }
  });
};

exports.role_delete = (req, res) => {
  this.hasPermission(req, res, 'delete_roles', () => {
    if (req.params.id) {
      Roles.destroy({
        where: {
          roleID: req.params.id,
        },
      })
      .then((deleted) => {
        res.status(204);
        res.json();
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json();
      });
    } else {
      res.status(400);
      res.json();
    }
  });
};
