//apiRequest.js
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();

// Displays all characters
app.get("/api/characters", function (req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/friends", function (req, res) {
  var chosen = req.params.friends;
  console.log(chosen);
  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].routeName) {
      return res.json(friends[i]);
    }
  }
  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriends = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();
  console.log(newFriends);
  characters.push(newFriends); // write to file
  res.json(newFriends);
});





