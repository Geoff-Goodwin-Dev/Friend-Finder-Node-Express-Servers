const friendsArray = require("../data/friends");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/friends", (req, res) => {
    friendsArray.push(req.body);
    console.log(friendsArray);
  });
};