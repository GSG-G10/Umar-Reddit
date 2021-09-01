const {
  addNewPost,
} = require('../../Database/Queries');

module.exports = (req, res, next) => {
  if (!(req.cookies.logged)) {
    res.redirect('/login');
  } else {
    const { userId } = req;
    const { title, content } = req.body;
    addNewPost(userId, title, content);
    next();
  }
};
