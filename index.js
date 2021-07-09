'use strict';
const { start } = require('./src/server');
const Pool = require('./src/models/Pool');

require('dotenv').config();
const PORT = process.env.PORT || 3004;

Pool.connect()
  .then(() => {
    start(PORT);
  })
  .catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });
