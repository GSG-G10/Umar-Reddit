const { join } = require('path');

const loginPageHandler = (req, res) => {
  if (req.cookies.logged) {
    return res.redirect('/profile');
  }res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'signIn.html'));
};

module.exports = { loginPageHandler };
