const router = require('express').Router();

const {
  TrendingTopicsAPI,
  clientError,
  serverError,
} = require('../Controllers');

router.get('/trending_topics', TrendingTopicsAPI);

router.use(clientError);
router.use(serverError);

module.exports = router;
