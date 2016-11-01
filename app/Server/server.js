var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");

var app = express();
var server = http.createServer(app);

// Set up server middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../')));

// Run Server
var port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log("Listening on port", port);
});

module.exports = app;