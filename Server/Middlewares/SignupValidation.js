const {
  checkUserEmail,
} = require('../Database/Queries');

const {
  singupSchema,
} = require('../Utills/Validations');

module.exports = (req, res, next) => {
  const { email } = req.body;
  checkUserEmail(email)
    .then((exists) => {
      if (exists.rows[0].exists) {
        res.status(403).json({ message: 'There is already an accout with this email address.' });
      } else {
        singupSchema.validateAsync(req.body)
          .then((value) => {
            req.body.value = value;
            next();
          })
          .catch((err) => res.status(403).json(err));
      }
    })
    .catch((err) => res.status(403).json(err));
};
