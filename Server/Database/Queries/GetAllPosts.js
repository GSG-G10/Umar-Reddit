const connection = require('../Connection');

module.exports = () => connection.query('SELECT posts.id,title,content,username FROM POSTS INNER JOIN users ON (posts.user_id = users.id) ORDER BY posts.id DESC ;');
