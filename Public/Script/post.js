/* eslint-disable no-unused-vars */
const postTitle = document.querySelector('.title');
const postContent = document.querySelector('.post-text-wrapper-light');
const postCreator = document.querySelector('.owner-light');

const assignData = (data) => {
  postTitle.textContent = data.title;
  postContent.textContent = data.content;
  postCreator.textContent = data.username;
};

const getPostData = (() => {
  fetch('/PostData')
    .then((data) => data.json())
    .then((data) => assignData(data[0]));
})();
