const jwt = require('jsonwebtoken');

const getUserId = async (req, res, next) => {
  if (!(req.cookies.logged)) {
    next();
  } else {
    const { cookie } = req.headers;
    const newCookie = cookie.split('=')[1];
    const { userId } = await jwt.decode(newCookie);
    req.userId = userId;
    next();
  }
};

module.exports = getUserId;
