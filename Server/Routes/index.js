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
  userToken,
  ChecksignedIn,
} = require('../Middlewares');

router.get('/trendingTopics', TrendingTopicsAPI);

router.get('/login', getUserId, loginPageHandler);

router.get('/signup', getUserId, signUpPageHandler);
router.post('/signUpValidation', signupValidation, createNewUser, userToken);

router.get('/profile/:userId', ChecksignedIn, profilePageHandler);
router.get('/UserData', getUserId, getUserData);

router.use(clientError);
router.use(serverError);

module.exports = router;
