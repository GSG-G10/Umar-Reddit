const router = require('express').Router();

const {
  TrendingTopicsAPI,
  loginPageHandler,
  signUpPageHandler,
  createNewUser,
  clientError,
  serverError,
} = require('../Controllers');

const {
  signupValidation,
  userToken,
  ChecksignedIn,
} = require('../Middlewares');

router.get('/trending_topics', TrendingTopicsAPI);

router.get('/login', loginPageHandler);

router.get('/signup', signUpPageHandler);
router.post('/signUpValidation', signupValidation, createNewUser, userToken);

router.get('/profile', ChecksignedIn);

router.use(clientError);
router.use(serverError);

module.exports = router;
