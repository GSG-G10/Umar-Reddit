const { sign } = require('jsonwebtoken');

module.exports = (req, res) => {
  const id = req.body.userId;
  const secret = process.env.SECRET;
  const cookie = sign({ role: 'user', userId: id }, secret);
  res.cookie('logged', cookie, { httpOnly: true, secure: true }).redirect('/profile');
};
