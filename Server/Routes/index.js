const router = require('express').Router();

const {
  profilePageHandler,
  signUpPageHandler,
  logoutPageHandler,
  TrendingTopicsAPI,
  loginPageHandler,
  createNewUser,
  getUserData,
  clientError,
  serverError,
  getUserId,
  createPost,
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

router.get('/profile', checkSignedIn, profilePageHandler);
router.get('/UserData', getUserId, checkSignedIn, getUserData);

router.post('/CreatePost', getUserId, createPost);

router.get('/logOut', logoutPageHandler);

router.use(clientError);
router.use(serverError);

module.exports = router;
