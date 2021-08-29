const getTrendingTopics = () => {
  fetch('/trendingTopics')
    .then((response) => response.json())
    // eslint-disable-next-line no-undef
    .then((data) => createNewsCard(data))
    .catch((err) => console.log(err));
};
getTrendingTopics();
