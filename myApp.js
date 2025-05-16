let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello Word");

const path = __dirname + '/views/index.html';

app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});


app.use('/public', express.static(__dirname + '/public'));



































 module.exports = app;
