const connection = require('../Connection');

module.exports = (userId, title, content) => connection.query('INSERT INTO posts (user_id,title,content) VALUES ($1,$2,$3);', [userId, title, content]);
