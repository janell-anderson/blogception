const db = require('../config/connection');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// setting up to take a user email and password information to create a new user
function register(cred) {
  console.log(cred);
  return bcrypt.hash(cred.password, saltRounds)
    .then(hash => {
      const newUser = {
        username: cred.username,
        email: cred.email,
        password: hash
      };
      // creating a user
      return db.one(`
        INSERT INTO users (username, email, password)
        VALUES ($/username/, $/email/, $/password/)
        RETURNING id, username, email
        `, newUser)
  });
}

function findByEmail(email) {
  return db.one(`
    SELECT * FROM users
    WHERE email = $1
    `, email);
}

function login(cred) {
  console.log(cred);
  return findByEmail(cred.email)
    .then(user => (
      // we are comparing the provided password with the one placed in the login form
      bcrypt.compare(cred.password, user.password)
        .then(match => {
          // if the password fails the user will not log in.
          if(!match) throw new Error('Credentials do not match');
          delete user.password;
          return user;
        })
    ))
}

module.exports = {
  register,
  login
}
