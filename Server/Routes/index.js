const router = require('express').Router();

const {
  profilePageHandler,
  signUpPageHandler,
  logoutPageHandler,
  TrendingTopicsAPI,
  loginPageHandler,
  createNewUser,
  getUserPosts,
  getUserData,
  clientError,
  serverError,
  createPost,
  deletePost,
  getUserId,
  getPosts,
} = require('../Controllers');

const {
  signupValidation,
  signinValidation,
  checkSignedIn,
  userToken,
} = require('../Middlewares');

router.get('/trendingTopics', TrendingTopicsAPI);
router.get('/Posts', getPosts);

router.get('/login', getUserId, loginPageHandler);
router.post('/signInValidation', signinValidation, userToken);

router.get('/signup', getUserId, signUpPageHandler);
router.post('/signUpValidation', signupValidation, createNewUser, userToken);

router.get('/profile', checkSignedIn, profilePageHandler);
router.get('/UserData', getUserId, getUserData);
router.get('/UserPosts', getUserId, getUserPosts);

router.post('/CreatePost', checkSignedIn, getUserId, createPost);

router.get('/DeletePost/:postId', checkSignedIn, deletePost);

router.get('/logOut', logoutPageHandler);

router.use(clientError);
router.use(serverError);

module.exports = router;
