const signupValidation = require('./SignupValidation');
const signinValidation = require('./SigninValidation');
const checkSignedIn = require('./ChecksignedIn');
const userToken = require('./UserToken');
const postToken = require('./PostToken');

module.exports = {
  signupValidation,
  signinValidation,
  checkSignedIn,
  userToken,
  postToken,
};
