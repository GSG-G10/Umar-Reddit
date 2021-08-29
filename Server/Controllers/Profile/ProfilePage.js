const { join } = require('path');

module.exports = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'Public', 'profile.html'));
};
