const router = require('express').Router();

const {
  TrendingTopicsAPI,
} = require('../Controllers');

router.get('/trending_topics', TrendingTopicsAPI);

module.exports = router;
