/* eslint-disable no-unused-vars */
const postTitle = document.querySelector('.title');
const postContent = document.querySelector('.post-text-wrapper-light');
const postCreator = document.querySelector('.owner-light');
const commentInput = document.querySelector('.comment');
const commentDiv = document.querySelector('.comments-container');

const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

const assignData = (data) => {
  postTitle.textContent = data.title;
  postContent.textContent = data.content;
  postCreator.textContent = data.username;
};

const createComment = (data) => {
  data.forEach((commentElement) => {
    const comment = createResultedElement('div', commentDiv, 'commentBox');

    const userNameDiv = createResultedElement('div', comment, 'userNameDiv');
    const userName = createResultedElement('h2', userNameDiv, 'userName');
    userName.textContent = commentElement.username;

    const contentDiv = createResultedElement('div', comment, 'contentDiv');
    const content = createResultedElement('p', contentDiv, 'content');
    content.textContent = commentElement.content;
  });
};

const getPostData = (() => {
  fetch('/PostData')
    .then((data) => data.json())
    .then((data) => assignData(data[0]));
})();

const getComments = (() => {
  fetch('/GetComments')
    .then((data) => data.json())
    // .then(console.log);
    .then((data) => createComment(data));
})();

commentInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const commentData = {
      comment: commentInput.value,
    };

    fetch('/CreateComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (response.redirected) {
          window.location.href = response.url;
        }
      });
  }
});
