 var friendData = require("../data/friends");
 var runningTotal;
 var subTotal;
 var closestMatch;
 var lowestTotal;
 lowestTotal = 100;
 runningTotal = 0;
 subTotal = 0;

module.exports = function(app) {


      app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

      app.post("/api/friends", function(req, res) {

        currentFriend = req.body;
        console.log(currentFriend.opinions[3])
        console.log(friendData[0].opinions[0])

for (z=0; z<friendData.length; z++) {

    for (i=0; i<10; i++) {

        if (currentFriend.opinions[i] > friendData[z].opinions[i]){
            subTotal = currentFriend.opinions[i] - friendData[z].opinions[i];
            runningTotal = runningTotal + subTotal;
        }
        else if (currentFriend.opinions[i] === friendData[z].opinions[i]){
        }
        else {
            subTotal = friendData[z].opinions[i] - currentFriend.opinions[i];
            runningTotal = runningTotal + subTotal; 
        }
        console.log(runningTotal);

    }
    if (runningTotal < lowestTotal) {
        lowestTotal = runningTotal;
        closestMatch = z;
    }

    runningTotal = 0;
    subTotal = 0;
}

lowestTotal = 100;
          res.json({name: friendData[closestMatch].name, image: friendData[closestMatch].image });
          friendData.push(req.body);

        });

}; 