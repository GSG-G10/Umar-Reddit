const { join } = require('path');

const loginPageHandler = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'signIn.html'));
};

module.exports = { loginPageHandler };
