// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");
// var db = require("/models");

// Express
var PORT = process.env.PORT || 8000;
var app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as default engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve public files
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://localhost/news-scraper", { useNewUrlParser: true });

// Routes
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/saved", function (req, res) {
    res.render("saved");
});

// Start the server
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});