const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, "../client/dist")))

app.listen(3003, function() {
  console.log("Listening on 3002!");
});
