const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'Public', '404.html'));
};
const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', '..', 'Public', '500.html'));
  next();
};
module.exports = {
  clientError,
  serverError,
};
