const {
  getAllPosts,
  getMainPost,
} = require('../../Database/Queries');

module.exports = (req, res) => {
  const { userId } = req;
  if (!(req.cookies.logged)) {
    getAllPosts()
      .then((data) => res.json(data.rows));
  } else {
    getMainPost(userId)
      .then((data) => res.json(data.rows));
  }
};
