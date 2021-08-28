const trendingTopics = document.querySelector('.TrendingTopics');
const loading = document.querySelector('.Loading-container');

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
    const imgContainer = createResultedElement('div', topicContainer, 'img-container');
    const img = createResultedElement('img', imgContainer, 'img');
    img.src = response[topic].image.url;
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

const getTrendingTopics = () => {
  fetch('/trending_topics')
    .then((response) => response.json())
    .then((data) => createNewsCard(data))
    .catch((err) => console.log(err));
};
getTrendingTopics();
