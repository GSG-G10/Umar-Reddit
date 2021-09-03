const jwt = require('jsonwebtoken');

const { getPostDataQuery } = require('../../Database/Queries');

module.exports = async (req, res) => {
  const { post } = req.cookies;
  const { postId } = await jwt.decode(post);
  getPostDataQuery(postId)
    .then((data) => res.json(data.rows));
};
