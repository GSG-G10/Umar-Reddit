const {
  TrendingTopicsAPI,
} = require('./APIs');

const {
  loginPageHandler,
} = require('./SignIn');
const {
  signUpPageHandler,
  createNewUser,
} = require('./SignUp');

const {
  clientError,
  serverError,
} = require('./Errors');

module.exports = {
  TrendingTopicsAPI,
  clientError,
  serverError,
  loginPageHandler,
  signUpPageHandler,
  createNewUser,
};
