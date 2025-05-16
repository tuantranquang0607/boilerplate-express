let express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.route('/name')
  .get(function(req, res) {
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({ name: `${firstName} ${lastName}` });
  })
  .post(function(req, res) {
    const firstName = req.body.first;
    const lastName = req.body.last;
    res.json({ name: `${firstName} ${lastName}` });
  });








































 module.exports = app;
