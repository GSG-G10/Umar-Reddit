const axios = require('axios').default;

module.exports = (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI',
    params: {
      pageNumber: '1', pageSize: '10', withThumbnails: 'false', location: 'us',
    },
    headers: {
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY,
    },
  };
  axios.request(options)
    .then((response) => res.json(response.data.value))
    .catch((error) => error);
};
