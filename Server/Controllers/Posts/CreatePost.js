const {
  addNewPost,
} = require('../../Database/Queries');

module.exports = (req, res) => {
  if (!(req.cookies.logged)) {
    res.redirect('/login');
  } else {
    const { userId } = req;
    const { title, content } = req.body;
    addNewPost(userId, title, content);
    res.redirect('/profile');
  }
};
