const title = document.querySelector('title');
const welcoming = document.querySelector('.welcoming');
const username = document.querySelector('.username');
const userImg = document.querySelector('.userImg');

const assignData = (data) => {
  title.textContent = `Profile - ${data.username}`;
  welcoming.textContent = `  ${data.username}`;
  userImg.src = data.image_url;
  username.textContent = data.username;
};
const getUserData = () => {
  fetch('/UserData')
    .then((data) => data.json())
    .then((data) => assignData(data[0]))
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
};
getUserData();
