const trendingTopics = document.querySelector('.TrendingTopics');

const createResultedElement = (element, parent, classname) => {
  const item = document.createElement(element);
  parent.appendChild(item);
  item.className = classname;
  return item;
};

const createNewsCard = (response) => {
  for (let topic = 0; topic <= 4; topic += 1) {
    const topicContainer = createResultedElement('div', trendingTopics, 'topicContainer');
    topicContainer.style.backgroundImage = `url('${response[topic].image.url}')`;
    const title = createResultedElement('h1', topicContainer, 'title');
    title.textContent = response[topic].title;
    const topicDetails = createResultedElement('div', topicContainer, 'topicDetails');
    const overview = createResultedElement('p', topicDetails, 'overview');
    const textLimit = 50;
    const overviewText = response[topic].description;
    if (overviewText.length > textLimit) {
      const firstSet = overviewText.substring(0, textLimit);
      overview.innerText = `${firstSet}...`;
    } else {
      overview.innerText = overviewText;
    }
  }
};

const getTrendingTopics = () => {
  fetch('/trending_topics')
    .then((response) => response.json())
    .then((data) => createNewsCard(data))
    .catch((err) => console.log(err));
};
getTrendingTopics();
