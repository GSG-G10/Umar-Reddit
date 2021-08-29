const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!req.cookies) return res.status(401).redirect('/login');
  const { logged } = req.cookies;
  const secret = process.env.SECRET;
  if (!logged) return res.status(401).redirect('/login');
  verify(logged, secret, (err, logged) => {
    next();
  });
};
