// Hello Madi, this is Madi. Paint me like one of your French girls.. 
// jk just do me like you did Article.js.. :)


// Requiring our good friend mongoose
var mongoose = require("mongoose");

// Taking the schema constructor and saving a ref to it to keep things copacetic again
var Schema = mongoose.Schema;

// New NoteSchema object again
var NoteSchema = new Schema({
    title: String,
    body: String
  });
  
  // Creating model with mongoose model model method jjust like in Article.js
  var Note = mongoose.model("Note", NoteSchema);
  
  // Exporting Note model
  module.exports = Note;
