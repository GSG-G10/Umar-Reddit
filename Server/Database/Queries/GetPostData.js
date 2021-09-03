const connection = require('../Connection');

module.exports = (postId) => connection.query('SELECT title,content,username FROM POSTS INNER JOIN users ON (posts.user_id = users.id ) WHERE posts.id=($1);', [postId]);
