let express = require('express');
let app = express();

console.log("Hello Word");

const path = __dirname + '/views/index.html';

app.get('/json', function(req, res) {
  res.json({ message: "Hello json" });
});

app.use('/public', express.static(__dirname + '/public'));



































 module.exports = app;
