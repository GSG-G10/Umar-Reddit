const {
  checkUserEmail,
  getUserPassword,
  getUserId,
} = require('../Database/Queries');

const {
  signinSchema,
  comparePasswords,
} = require('../Utills/Validations');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  checkUserEmail(email)
    .then((value) => value.rows[0].exists)
    .then((value) => {
      if (value === false) {
        res.json({ message: 'Email or password is not correct' });
      } else {
        signinSchema.validateAsync(req.body)
          .then((result) => getUserPassword(result.email))
          .then((hashedPassword) => hashedPassword.rows[0].password)
          .then((hashedPassword) => comparePasswords(password, hashedPassword))
          .then(((signed) => {
            if (!signed) {
              res.json({ message: 'Email or password is not correct' });
            } else {
              getUserId(email)
                .then((id) => {
                  req.body.userId = id.rows[0].id;
                  next();
                });
            }
          }))
          .catch((err) => res.json(err));
      }
    });
};
