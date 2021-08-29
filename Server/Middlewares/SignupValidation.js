const { singupSchema } = require('../Utills/Validations');

module.exports = (req, res, next) => {
  singupSchema.validateAsync(req.body)
    .then((value) => {
      req.body.value = value;
      next();
    })
    .catch(({ message }) => res.status(400).json({ msg: message }));
};
