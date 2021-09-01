const connection = require('../Connection');

module.exports = (userId) => connection.query('SELECT * FROM users WHERE id = ($1);', [userId]);
