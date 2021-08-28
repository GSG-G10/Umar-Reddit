const router = require('express').Router();

const {
  TrendingTopicsAPI,
  loginPageHandler,
  signUpPageHandler,
  clientError,
  serverError,
} = require('../Controllers');

router.get('/trending_topics', TrendingTopicsAPI);
router.get('/login', loginPageHandler);
router.get('/signup', signUpPageHandler);

router.use(clientError);
router.use(serverError);

module.exports = router;
