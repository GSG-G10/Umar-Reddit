const getUserPassword = require('./GetUserPassword');
const checkUserEmail = require('./CheckUserEmail');
const getUserDataQuery = require('./GetUserData');
const addNewUser = require('./AddNewUser');
const addNewPost = require('./AddNewPost');
const getUserId = require('./GetUserId');

module.exports = {
  getUserDataQuery,
  getUserPassword,
  checkUserEmail,
  addNewPost,
  addNewUser,
  getUserId,
};
