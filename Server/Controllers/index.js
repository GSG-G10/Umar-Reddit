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
  logoutPageHandler,
} = require('./LogOut');

const {
  profilePageHandler,
  getUserId,
  getUserData,
} = require('./Profile');

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
  profilePageHandler,
  createNewUser,
  getUserId,
  getUserData,
  logoutPageHandler,
};
