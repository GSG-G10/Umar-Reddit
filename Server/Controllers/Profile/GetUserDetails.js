const { getUserDataQuery } = require('../../Database/Queries');

module.exports = (req, res) => {
  getUserDataQuery(req.userId)
    .then((results) => res.json(results.rows))
    .catch((err) => err);
};
