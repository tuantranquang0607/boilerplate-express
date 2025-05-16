let express = require('express');
let app = express();

console.log("Hello Word");

const path = __dirname + '/views/index.html';

app.get('/', function(req, res) {
  res.sendFile(path);
});

app.use('/public', express.static(__dirname + '/public'));



































 module.exports = app;
