const { addNewUser, getUserId } = require('../../Database/Queries');

const createNewUser = (req, res, next) => {
  const { username, email, password } = req.body.value;
  addNewUser(username, email, password)
    .then(() => getUserId(email))
    .then((result) => {
      req.body.userId = result.rows[0].id;
      next();
    });
};

module.exports = { createNewUser };
