/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const getTrendingTopics = (() => {
  fetch('/trendingTopics')
    .then((response) => response.json())
    .then((data) => createNewsCard(data))
    .catch((err) => (err));
})();

const getPosts = (() => {
  fetch('/Posts')
    .then((response) => response.json())
    .then((data) => createPostCard(data))
    .catch((err) => (err));
})();
