const connection = require('../Connection');

module.exports = (userId) => connection.query('SELECT * FROM POSTS WHERE user_id =($1)', [userId]);
