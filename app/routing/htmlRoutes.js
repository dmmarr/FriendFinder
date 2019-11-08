//htmlRequest.js
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// var http = require("http");
// var fs = require("fs");
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//     // Capture the url the request is made to
//     var path = req.url;
//     if (path === survey) {
//         return fs.readFile(__dirname + "/survey.html", function (err, data) {
//             if (err) throw err;
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         });
//     }
//     else {
//         return fs.readFile(__dirname + "/home.html", function (err, data) {
//             if (err) throw err;
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//         });
//     }
// }