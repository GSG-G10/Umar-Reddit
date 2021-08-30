const router = require('express').Router();

const {
  TrendingTopicsAPI,
  loginPageHandler,
  signUpPageHandler,
  profilePageHandler,
  createNewUser,
  clientError,
  serverError,
  getUserId,
  getUserData,
} = require('../Controllers');

const {
  signupValidation,
  signinValidation,
  userToken,
  checkSignedIn,
} = require('../Middlewares');

router.get('/trendingTopics', TrendingTopicsAPI);

router.get('/login', getUserId, loginPageHandler);
router.post('/signInValidation', signinValidation, userToken);

router.get('/signup', getUserId, signUpPageHandler);
router.post('/signUpValidation', signupValidation, createNewUser, userToken);

router.get('/profile/:userId', checkSignedIn, profilePageHandler);
router.get('/UserData', getUserId, checkSignedIn, getUserData);

router.use(clientError);
router.use(serverError);

module.exports = router;
