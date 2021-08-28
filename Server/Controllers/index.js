const {
  TrendingTopicsAPI,
} = require('./APIs');

const {
  loginPageHandler,
} = require('./SignIn');

const {
  clientError,
  serverError,
} = require('./Errors');

module.exports = {
  TrendingTopicsAPI,
  clientError,
  serverError,
  loginPageHandler,
};
