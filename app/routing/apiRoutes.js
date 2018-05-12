const friendsArray = require("../data/friends");

module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/friends", (req, res) => {
    let bestFriend = {
      name: "",
      photo: "",
      friendDelta: 1000000000
    };
    let newFriend = req.body;
    let scoresArray = newFriend.scores;
    for (let i = 0; i < scoresArray.length; i++) {
      scoresArray[i] = parseInt(scoresArray[i]);
    }
    console.log(scoresArray);
    let totalDifference = 0;

    for (let x = 0; x < friendsArray.length; x++) {
      console.log(friendsArray[x].name);
      score = 0;
      totalDifference = 0;
      for (let i = 0; i < scoresArray.length; i++) {
        totalDifference += Math.abs(scoresArray[i] - friendsArray[x].scores[i]);
      }
      if (totalDifference <= bestFriend.friendDelta) {
        bestFriend.name = friendsArray[x].name;
        bestFriend.photo = friendsArray[x].photo;
        bestFriend.friendDelta = totalDifference;
      }
    }
    console.log('best friend is:', bestFriend);
    friendsArray.push(newFriend);
    console.log(friendsArray);
    res.json(bestFriend);
  });
};