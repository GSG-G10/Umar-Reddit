const jwt = require('jsonwebtoken');

const getUserId = async (req, res, next) => {
  if (!(req.cookies.logged)) {
    next();
  } else {
    const { logged } = req.cookies;
    const { userId } = await jwt.decode(logged);
    req.userId = userId;
    next();
  }
};

module.exports = getUserId;
