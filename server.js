var express = require("express");

var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 1638;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// app.get("/api/characters", function (req, res) {
//   return res.json(characters);
// });

app.get("/api/friends", function (req, res) {
  // Refactor to return all friends
  var chosen = req.params.friends;
  console.log(chosen);
  // for (var i = 0; i < friends.length; i++) {
  //   if (chosen === friends[i].routeName) {
  //     return res.json(friends[i]);
  //   }
  // }
  return res.json(false);
});

app.post("/api/friends", function (req, res) {
  //save data to data/friends.js

  var newFriends = req.body;
  newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriends);
  // characters.push(newFriends);
  res.json(newFriends);
});

app.listen(PORT, function () {
  console.log("http//:localhost:" + PORT)
})
