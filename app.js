
require('babel-register');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

module.exports = app;
