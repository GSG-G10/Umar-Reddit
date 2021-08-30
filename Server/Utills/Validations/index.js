const { singupSchema } = require('./SignupSchema');

const {
  comparePasswords,
  hashPassword,
} = require('./HashPasswords');

module.exports = {
  singupSchema,
  comparePasswords,
  hashPassword,
};
