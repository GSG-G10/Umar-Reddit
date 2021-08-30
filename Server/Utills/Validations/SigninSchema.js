const Joi = require('joi');

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).max(30).required(),
});

module.exports = { signinSchema };
