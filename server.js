// Dependencies required
var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose"); 
var bodyParser = require("body-parser");
var request = require("request");
var logger = require("morgan");

// These little thugs are for scraping things that are not mine
var cheerio = require("cheerio");
var axios = require("axios");

// My port, requiring models, and initializing express

var PORT = 3000;
var app = express();
var db = require("./models");

// Mongo db connection and mongoose for .then
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/scrapingWithMongoose", {
    useMongoClient: true
});

// Making the public folder static
app.use(express.static("public"));

// To handle submitting forms
app.use(bodyParser.urlencoded({ extended: false }));

// To log requests
app.use(logger("dev"));

// Get route to scrape RichardDawkinsFoundation.net
app.get("/scrape", function(req, res) {
    // Grabbing entire body of the html (wondering if this will work how i expect)
    axios.get(https://www.richarddawkins.net/news/).then(function(response) {
        // loading to cheerio and making it a shorthand selector
        var $ = cheerio.load(response.data);
    });


