const { getUserPostsQuery } = require('../../Database/Queries');

module.exports = (req, res) => {
  const { userId } = req;
  getUserPostsQuery(userId)
    .then((response) => res.json(response.rows));
};
