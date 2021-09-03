/* eslint-disable no-unused-vars */
const left = document.querySelector('.left');
const titleUser = document.querySelector('title');
const welcoming = document.querySelector('.welcoming');
const username = document.querySelector('.username');
const userImg = document.querySelector('.userImg');

const assignData = (data) => {
  titleUser.textContent = `Profile - ${data.username}`;
  welcoming.textContent = `  ${data.username}`;
  userImg.src = data.image_url;
  username.textContent = data.username;
};
const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

const createPostCard = (response) => {
  response.forEach((post) => {
    const postCard = createResultedElement('li', left, 'li');

    const postId = createResultedElement('input', postCard, 'hidden');
    postId.type = 'hidden';
    postId.value = post.id;

    const postWrapper = createResultedElement('div', postCard, 'post-wrapper-light');

    const componentWrapper = createResultedElement('div', postWrapper, 'component-wrapper-light');
    const voteButton = createResultedElement('button', componentWrapper, 'not-vote-button-light');
    const votes = createResultedElement('span', componentWrapper, 'span');
    votes.textContent = '0';
    const notVoteButton = createResultedElement('button', componentWrapper, 'not-unvote-button-light');

    const contentWrapper = createResultedElement('div', postWrapper, 'content-wrapper-light');

    const titleWrapper = createResultedElement('div', contentWrapper, 'title-wrapper-light');
    const title = createResultedElement('h2', titleWrapper, 'title');
    title.textContent = post.title;
    const deleteButton = createResultedElement('a', titleWrapper, 'deletButton');
    const deleteIcon = createResultedElement('i', deleteButton, 'fas fa-trash');
    deleteButton.href = `/DeletePost/${postId.value}`;

    const textWrapper = createResultedElement('div', contentWrapper, 'post-text-wrapper-light');
    textWrapper.textContent = post.content;

    const detailWrapper = createResultedElement('div', contentWrapper, 'detail-wrapper-light');

    const comments = createResultedElement('a', detailWrapper, 'comments');
    comments.textContent = 'comments';
    comments.href = `/post/${postId.value}`;
    comments.style.cursor = 'pointer';

    const community = createResultedElement('a', detailWrapper, 'community');
    community.textContent = '/r/public';

    const by = createResultedElement('span', detailWrapper, 'by');
    by.textContent = 'by';
    const creator = createResultedElement('a', detailWrapper, 'owner-light');
    creator.textContent = post.username;
    const timePosted = createResultedElement('span', detailWrapper, 'time');
    timePosted.textContent = 'recently posted';
  });
};

const getUserData = (() => {
  fetch('/UserData')
    .then((data) => data.json())
    .then((data) => assignData(data[0]));
})();

const getUserPosts = (() => {
  fetch('/UserPosts')
    .then((data) => data.json())
    .then((data) => createPostCard(data));
})();
