/* eslint-disable no-unused-vars */
const trendingTopics = document.querySelector('.TrendingTopics');
const loading = document.querySelector('.Loading-container');
const logBtn = document.querySelector('.log-btn');
const signBtn = document.querySelector('.sign-btn');
const addPost = document.querySelector('.add-post');
const signOutBtn = document.querySelector('.log-out');
const main = document.querySelector('.main');

document.querySelector('.form-popup').style.display = 'none';

if (document.cookie.split(';').some((item) => item.trim().startsWith('logged='))) {
  logBtn.style.display = 'none';
  signBtn.style.display = 'none';
  addPost.classList.remove('hidden');
  signOutBtn.classList.remove('hidden');
  addPost.style.cursor = 'pointer';
  signOutBtn.style.cursor = 'pointer';
}

const openForm = () => {
  document.querySelector('.form-popup').style.display = 'block';
};

addPost.addEventListener('click', openForm);

window.onclick = (e) => {
  if (e.target === document.querySelector('.form-popup')) {
    document.querySelector('.form-popup').style.display = 'none';
  }
};

const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

const createNewsCard = (response) => {
  setTimeout(() => {
    loading.classList.add('hidden');
  }, 500);
  for (let topic = 0; topic <= 4; topic += 1) {
    const topicContainer = createResultedElement('div', trendingTopics, 'topicContainer');
    topicContainer.style.backgroundImage = `url(${response[topic].image.url})`;
    const title = createResultedElement('h1', topicContainer, 'title');
    title.textContent = response[topic].title.substring(0, 25);
    const topicDetails = createResultedElement('div', topicContainer, 'topicDetails');
    const overview = createResultedElement('p', topicDetails, 'overview');
    const textLimit = 25;
    const overviewText = response[topic].description;
    if (overviewText.length > textLimit || title.length > textLimit) {
      const firstSet = overviewText.substring(0, textLimit);
      overview.innerText = `${firstSet}...`;
    } else {
      overview.innerText = overviewText;
    }
    const readMore = createResultedElement('a', topicContainer, 'readMore');
    readMore.href = response[topic].url;
    readMore.innerText = 'Read More';
  }
};

const createPostCard = (response) => {
  response.forEach((post) => {
    const postCard = createResultedElement('li', main, 'li');

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
