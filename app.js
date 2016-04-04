var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use('static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.listen(port);