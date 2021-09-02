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
  getUserPosts,
} = require('./Profile');

const {
  createPost,
} = require('./Posts');

const {
  clientError,
  serverError,
} = require('./Errors');

module.exports = {
  profilePageHandler,
  TrendingTopicsAPI,
  logoutPageHandler,
  signUpPageHandler,
  loginPageHandler,
  createNewUser,
  getUserPosts,
  getUserData,
  serverError,
  clientError,
  createPost,
  getUserId,
};
