let express = require('express');
let app = express();
require('dotenv').config();

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});





































 module.exports = app;
