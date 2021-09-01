const connection = require('../Connection');

module.exports = (email) => connection.query('SELECT exists(SELECT 1 from users WHERE email=($1));', [email]);
