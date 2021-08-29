const { join } = require('path');

const signUpPageHandler = (req, res) => {
  if (req.cookies.logged) {
    return res.redirect('/profile');
  }res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'signUp.html'));
};

module.exports = { signUpPageHandler };
