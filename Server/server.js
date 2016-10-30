var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = requie("http");

var app = express();
var server = http.createServer(app);

// Set up server middleware
app.use(bodyParser.json());

// Run Server
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log("Listening on port", port);
});

// Server up static index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "..app/index.html"));
});
