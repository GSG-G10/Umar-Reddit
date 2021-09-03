/* eslint-disable no-undef */
const getTrendingTopics = () => {
  fetch('/trendingTopics')
    .then((response) => response.json())
    .then((data) => createNewsCard(data))
    .catch((err) => (err));
};
getTrendingTopics();

const getPosts = () => {
  fetch('/Posts')
    .then((response) => response.json())
    .then((data) => createPostCard(data))
    .catch((err) => (err));
};
getPosts();
