const { sign } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { postId } = req.params;
  const secret = process.env.SECRET;
  const cookie = sign({ role: 'user', postId }, secret);
  res.cookie('post', cookie, { httpOnly: false, secure: true });
  next();
};
