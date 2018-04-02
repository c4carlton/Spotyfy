const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3333;

app.use(express.static(path.join(__dirname, "../client/dist")))

app.listen(port, function() {
  console.log(`Listening on ${port}!`);
});
