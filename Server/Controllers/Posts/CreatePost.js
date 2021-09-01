module.exports = (req, res) => {
  if (!(req.cookies.logged)) {
    res.redirect('/login');
  } else {
    const { title, content } = req.body;
    const { userId } = req;
    console.log(title, content, userId);
  }
};
