const {check, validationResult} = require('express-validator/check');
const {matchedData} = require('express-validator/filter');
const sequelize = require('../db');
const bcryptController = require('./bcryptController.js');
const Logins = sequelize.import('../models/logins.js');
const Users = sequelize.import('../models/users.js');

// Export express-validator array
exports.validate = [
  check('username')
    .isEmail().withMessage('Username must be a valid email address')
    .trim()
    .normalizeEmail()
    .custom((value) => {
      return Logins.findOne({where: {userName: value}}).then((user) => {
        if (user) {
          throw new Error('Email is already registered');
        }
        return true;
      });
    }),
  check('password')
    .isLength({min: 8}).withMessage('Password must be 8 characters minimum')
    .matches(/\d/).withMessage('Password must contain 1 number'),
];

const createUserAndLogin = (validated, res) => {
  const user = {
    userName: validated.username,
    email: validated.username,
  };
  const hashed = bcryptController.getHashedPassword(validated.password);
  Users.create(user).then((createdUser) => {
    return Logins.create({
      userName: createdUser.userName,
      relatedUserID: createdUser.userID,
      passwordSalt: hashed.salt,
      passwordHash: hashed.passwordHash,
    });
  })
  .then((login) => {
    res.status(200);
    res.json({});
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  });
};

exports.register_post = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json(errors.array());
  } else {
    const validatedData = matchedData(req);
    createUserAndLogin(validatedData, res);
  };
};
