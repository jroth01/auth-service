// Require dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Require controller modules
const registerController = require('./controllers/registerController.js');
const loginController = require('./controllers/loginController.js');
const tokenController = require('./controllers/tokenController.js');
const userController = require('./controllers/userController.js');
const roleController = require('./controllers/roleController.js');
const permissionController = require('./controllers/permissionController.js');

// Use middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Public API endpoints
app.route('/register')
  .post(registerController.validate, registerController.register_post);

app.route('/login')
  .post(loginController.login_post);

app.route('/token')
  .post(tokenController.token_post);

// Protected API Resources
app.route('/logins')
  .get(loginController.logins_get);

app.route('/users')
  .get(userController.users_get);

app.route('/roles')
  .get(roleController.roles_get);

app.route('/roles/:id')
  .get(roleController.role_get)
  .patch(roleController.role_patch)
  .delete(roleController.role_delete);

app.route('/permissions')
  .get(permissionController.permissions_get)
  .post(permissionController.permissions_post);

app.route('/permissions/:id')
  .patch(permissionController.permission_patch)
  .delete(permissionController.permission_delete);

// Run server on port
app.listen(3000, () => console.log('Example app listening on port 3000!'));
