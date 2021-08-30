const connection = require('../Connection');

module.exports = (email) => connection.query('SELECT password FROM users WHERE email=($1)', [email]);
