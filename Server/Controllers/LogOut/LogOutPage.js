module.exports = (req, res) => {
  res.clearCookie('logged');
  res.redirect('/');
};
