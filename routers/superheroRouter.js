var express = require('express');
var router = express.Router();

//require hero model
var heroModel = require('../models/superHeroModel.js');

/////////////////Add New hero////////////////////////////////
//remember that .post requires bodyParser because bodyParser takes the information from the DOM and processes it for the post
//req.body is what is received FROM the client-side
app.post('/addNewHero', function(req, res){
  console.log('hit the .post addNewHero');
  console.log('request body', req.body);

  var sendData = req.body;

//newHero refers to the model, in this case is heroModel
  var newHero = new heroModel({
    alias: sendData.alias,
    first_name: sendData.first_name,
    last_name: sendData.last_name,
    power_name: sendData.power_name,
    city: sendData.city
  });

//.save refers to the variable above, newHero in this case
  newHero.save(function(err){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      }
      else{
        console.log('success with new hero:', newHero);
        res.send(newHero);
      }
    });

});
