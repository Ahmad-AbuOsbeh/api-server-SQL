'use strict';

const express = require('express');
const cors = require('cors');
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');
const foodHandler = require('./routes/food');
const clothesHandler = require('./routes/clothes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('HOME route server');
});

app.use('/api/v1/food', foodHandler);
app.use('/api/v1/clothes', clothesHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Listining on PORT ${port}`);
  });
}
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start,
};
