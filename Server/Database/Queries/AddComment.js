const connection = require('../Connection');

module.exports = (userId, postId, content) => connection.query('INSERT INTO comments (user_id,post_id,content) VALUES ($1,$2,$3);', [userId, postId, content]);
