require('dotenv').config();

const {
  Pool,
} = require('pg');

const {
  NODE_ENV,
  DB_URL,
  DEV_DB_URL,
  TEST_DB_URL,
} = process.env;

let dbUrl = '';

switch (NODE_ENV) {
  case 'production':
    dbUrl = DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database URL');
}

module.exports = new Pool({
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});
