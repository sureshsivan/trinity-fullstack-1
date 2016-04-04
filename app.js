var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setup-controller');

var port = process.env.PORT || 8080;

app.use('static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnStr());

setupController(app);

app.listen(port);

