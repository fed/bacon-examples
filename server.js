var path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname + '/style.css'));
});

app.get('/dist/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/bundle.js'));
});

app.listen(process.env.PORT || 80, function () {
  console.log('Server listening on port 8080...');
});
