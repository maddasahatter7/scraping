// Requiring mr. mongoose
var mongoose = require("mongoose");

// Taking the schema constructor and saving a ref to it to keep things copacetic
var Schema = mongoose.Schema;

// Making a brand spaking new UserSchema object
var ArticleSchema = new Schema({
  // It's called "title" because it is required if ye be a string
  title: {
    type: String,
    required: true
  },
  // It is also required to be "link", not my rules
  link: {
    type: String,
    required: true
  },
  //Here is how young Mads is going to populate the Article with a Note. 
  // Storing the Note id right hurrr. the ref. prop. is what will link the object id with the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

//The mongoose model method below uses the schema from up top to make the model
var Article = mongoose.model("Article", ArticleSchema);

// The usual module.exports to export my dear, sweet Article model
module.exports = Article;
