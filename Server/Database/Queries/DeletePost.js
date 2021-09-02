const connection = require('../Connection');

module.exports = (postId) => connection.query('DELETE FROM posts WHERE id=($1);', [postId]);
