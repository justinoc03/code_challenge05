/* Main server file */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var portDecision = process.env.PORT || 4242;

// use json body parser
app.use(bodyParser.json());

// use public as static folder
app.use(express.static('public'));

//connect to database
mongoose.connect('mongodb://localhost:27017/codeChallenge5');

// require and use indexRouter
var indexRouter = require('../routers/index');
app.use('/', indexRouter);

// require and use indexRouter
var superHeroRouter = require('../routers/superheroRouter.js');
app.use('/', superHeroRouter);

//require and use superheroRouter

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Im listening on port', port);
});
