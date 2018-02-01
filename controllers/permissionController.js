const sequelize = require('../db');
const tokenController = require('./tokenController.js');
const Permissions = sequelize.import('../models/permissions.js');
const Roles = sequelize.import('../models/roles.js');

// Returns either result of success callback, or 403 response w/ message
// Params: request, permissions name, success callback function
exports.hasPermission = (req, res, permission, success) => {
  const token = req.get('Authorization');
  const hasPermission = tokenController.hasPermission(token, permission);
  console.log('permission', permission);
  if (hasPermission) {
    return success();
  } else {
    res.status(403);
    return res.json({
      error: {
        status: 403,
        message: 'Unauthorized',
      },
    });
  }
};

exports.permissions_get = (req, res) => {
  this.hasPermission(req, res, 'get_permissions', () => {
    Permissions.findAll().then((permissions) => {
      res.status(200);
      res.json(permissions);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
  });
};

const createNewPermission = (req, res) => {
  Roles.findOne({where: {roleID: req.body.relatedRoleID}})
  .then((role) => {
    if (!role) {
      return throwBadRequest(res, roleErr(req).msg, roleErr(req).required);
    }
    return Permissions.findOrCreate({
      where: {
        permissionName: req.body.permissionName,
        relatedRoleID: req.body.relatedRoleID,
      },
      defaults: {
        permissionName: req.body.permissionName,
        relatedRoleID: req.body.relatedRoleID,
        resourceName: req.body.resourceName,
      },
    });
  })
  .then((createdPermission) => {
    res.status(201);
    return res.json({});
  })
  .catch((err) => {
    res.status(500);
    return res.json(err);
  });
};

exports.permissions_post = (req, res) => {
  this.hasPermission(req, res, 'post_permissions', () => {
    const id = req.body.relatedRoleID;
    const resource = req.body.resourceName;
    const permission = req.body.permissionName;
    if (id && resource && permission) {
      return createNewPermission(req, res);
    } else {
      res.status(400);
      res.send();
    }
  });
};

exports.permission_patch = (req, res) => {
  this.hasPermission(req, res, 'patch_permissions', () => {
    Permissions.update({
      permissionName: req.body.permissionName,
      relatedRoleID: req.body.relatedRoleID,
    }, {
      where: {
        permissionID: req.params.id,
      },
    })
    .then((updatedPermission) => {
      res.status(204);
      res.json();
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json();
    });
  });
};

exports.permission_delete = (req, res) => {
  this.hasPermission(req, res, 'delete_permissions', () => {
    if (req.params.id) {
      Permissions.destroy({
        where: {
          permissionID: req.params.id,
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
