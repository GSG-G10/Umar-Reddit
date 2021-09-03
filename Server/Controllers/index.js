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
  postPageHandler,
  getPostData,
} = require('./PostPage');

const {
  createComment,
} = require('./Comments');

const {
  createPost,
  deletePost,
  getPosts,
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
  postPageHandler,
  createNewUser,
  createComment,
  getUserPosts,
  getUserData,
  getPostData,
  serverError,
  clientError,
  createPost,
  deletePost,
  getUserId,
  getPosts,
};
