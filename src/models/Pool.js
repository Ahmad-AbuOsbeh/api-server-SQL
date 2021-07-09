'use strict';
//require pg to connect and use postgres
const pg = require('pg');
require('dotenv').config();

// line 4 is a rejection key, only for deployment on Heroku
pg.defaults.ssl = process.env.NODE_ENV === 'production' && {
  rejectUnauthorized: false,
};

//create a new pool method from pg library to connecct with postgres database
module.exports = new pg.Pool({
  //added DATABASE_URL in .env with the information of our database
  connectionString: process.env.DATABASE_URL,
});
