const express = require('express');
const db = require('../database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', express.static('client/dist'));



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});