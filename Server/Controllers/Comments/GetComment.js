const jwt = require('jsonwebtoken');

const { getCommentsQuery } = require('../../Database/Queries');

module.exports = async (req, res) => {
  const { post } = req.cookies;
  const { postId } = await jwt.decode(post);
  getCommentsQuery(postId)
    .then((data) => res.json(data.rows));
};
