const {
  deletePostQuery,
  deletePostComments,
} = require('../../Database/Queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  deletePostComments(postId)
    .then(() => {
      deletePostQuery(postId);
      res.redirect('/profile');
    });
};
