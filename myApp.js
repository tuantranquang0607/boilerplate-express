let express = require('express');
let app = express();

console.log("Hello Word");

const path = __dirname + '/views/index.html';

app.get('/', function(req, res) {
  res.sendFile(path);
});



































 module.exports = app;
