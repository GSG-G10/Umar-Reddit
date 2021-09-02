const { deletePostQuery } = require('../../Database/Queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  deletePostQuery(postId)
    .then(res.redirect('/profile'));
};
