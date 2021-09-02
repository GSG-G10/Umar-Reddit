const getUserPassword = require('./GetUserPassword');
const getUserPostsQuery = require('./GetUserPosts');
const checkUserEmail = require('./CheckUserEmail');
const getUserDataQuery = require('./GetUserData');
const addNewUser = require('./AddNewUser');
const addNewPost = require('./AddNewPost');
const getUserId = require('./GetUserId');

module.exports = {
  getUserDataQuery,
  getUserPassword,
  checkUserEmail,
  getUserPostsQuery,
  addNewPost,
  addNewUser,
  getUserId,
};
