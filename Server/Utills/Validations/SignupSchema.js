const Joi = require('joi');

const singupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(7).required(),
  confirmPassword: Joi.ref('password'),
});

module.exports = { singupSchema };
