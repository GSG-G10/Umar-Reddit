const { addNewUser, getUserId } = require('../../Database/Queries');
const { hashPassword } = require('../../Utills/Validations');

const createNewUser = (req, res, next) => {
  const { username, email, password } = req.body.value;
  hashPassword(password)
    .then((hashedPassword) => addNewUser(username, email, hashedPassword))
    .then(() => getUserId(email))
    .then((result) => {
      req.body.userId = result.rows[0].id;
      next();
    });
};

module.exports = { createNewUser };
