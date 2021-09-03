/* eslint-disable no-unused-vars */
const postTitle = document.querySelector('.title');
const postContent = document.querySelector('.post-text-wrapper-light');
const postCreator = document.querySelector('.owner-light');
const comment = document.querySelector('.comment');

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

comment.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const commentData = {
      comment: comment.value,
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
