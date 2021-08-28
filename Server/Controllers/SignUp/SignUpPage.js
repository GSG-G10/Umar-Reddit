const { join } = require('path');

const signUpPageHandler = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'signUp.html'));
};

module.exports = { signUpPageHandler };
