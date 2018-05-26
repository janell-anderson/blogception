const auth = require('express').Router();
const authController = require('../controllers/authController');

auth.get('/', authController.restrict, (req, res) => res.json({
  user: res.locals.user
}));

auth.post('/register', authController.register);
auth.post('/login', authController.login);

module.exports = auth;
