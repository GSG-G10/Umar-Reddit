const jwt = require('jsonwebtoken');

const { addCommentQuery } = require('../../Database/Queries');

module.exports = async (req, res) => {
  const { comment } = req.body;
  const { userId } = req;
  const { post } = req.cookies;
  const { postId } = await jwt.decode(post);

  addCommentQuery(userId, postId, comment)
    .then(res.redirect(`/post/${postId}`));
};
