const trendingTopics = document.querySelector('.TrendingTopics');
const loading = document.querySelector('.Loading-container');
const logBtn = document.querySelector('.log-btn');
const signBtn = document.querySelector('.sign-btn');
const addPost = document.querySelector('.add-post');
document.querySelector('.form-popup').style.display = 'none';

if (document.cookie.split(';').some((item) => item.trim().startsWith('logged='))) {
  logBtn.style.display = 'none';
  signBtn.style.display = 'none';
  addPost.classList.remove('hidden');
  addPost.style.cursor = 'pointer';
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

// eslint-disable-next-line no-unused-vars
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
