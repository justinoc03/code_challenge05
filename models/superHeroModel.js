/* Superhero Model - Mongoose Schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var heroModel = mongoose.model('Heroes', heroSchema);
module.exports = heroModel;
