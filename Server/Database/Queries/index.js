const getCommentsQuery = require('./GetCommentsQuery');
const getUserPassword = require('./GetUserPassword');
const getUserPostsQuery = require('./GetUserPosts');
const checkUserEmail = require('./CheckUserEmail');
const getUserDataQuery = require('./GetUserData');
const getPostDataQuery = require('./GetPostData');
const addCommentQuery = require('./AddComment');
const deletePostQuery = require('./DeletePost');
const getAllPosts = require('./GetAllPosts');
const getMainPost = require('./GetMainPosts');
const addNewUser = require('./AddNewUser');
const addNewPost = require('./AddNewPost');
const getUserId = require('./GetUserId');

module.exports = {
  getUserPostsQuery,
  getCommentsQuery,
  getUserDataQuery,
  getPostDataQuery,
  getUserPassword,
  deletePostQuery,
  addCommentQuery,
  checkUserEmail,
  getAllPosts,
  getMainPost,
  addNewPost,
  addNewUser,
  getUserId,
};
