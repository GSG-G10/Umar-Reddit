const connection = require('../Connection');

module.exports = (postId) => connection.query('SELECT users.username,comments.content FROM users INNER JOIN comments ON (users.id=comments.user_id) WHERE post_id=($1)', [postId]);
