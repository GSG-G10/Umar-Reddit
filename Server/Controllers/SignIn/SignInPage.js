const { join } = require('path');

// eslint-disable-next-line consistent-return
const loginPageHandler = (req, res) => {
  if (req.cookies.logged) {
    return res.redirect('/profile');
  }res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'signIn.html'));
};

module.exports = { loginPageHandler };
