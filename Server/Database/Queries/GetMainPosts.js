const connection = require('../Connection');

module.exports = (userId) => connection.query('SELECT posts.id,title,content,username FROM POSTS INNER JOIN users ON (posts.user_id = users.id ) WHERE user_id <>($1) ORDER BY posts.id DESC', [userId]);
