const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN_SECRET || 'supersecuresecret';

// makes a token for the user
// attaches it to the user
function makeToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      (err, data) => err ? reject(err) : resolve(data)
    )
  });
}

// will verify the user by token
// the token will accept if it is the same
// it will reject the log in if it is not the same
function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      secret,
      (err, data) => err ? reject(err) : resolve(data)
    )
  });
}

module.exports = {
  makeToken,
  verify
};
