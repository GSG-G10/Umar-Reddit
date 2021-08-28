const router = require('express').Router();

const {
  TrendingTopicsAPI,
  loginPageHandler,
  clientError,
  serverError,
} = require('../Controllers');

router.get('/trending_topics', TrendingTopicsAPI);
router.get('/loginPage', loginPageHandler);
router.use(clientError);
router.use(serverError);

module.exports = router;
