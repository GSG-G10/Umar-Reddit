const connection = require('../Connection');

module.exports = (postId) => connection.query('DELETE FROM comments WHERE post_id=($1);', [postId]);
