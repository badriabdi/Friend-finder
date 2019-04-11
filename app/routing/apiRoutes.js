

// Export for use in main server.js file
console.log('API Route Connected Successfully');


// Link in Friends Data
var friendsData = require('../data/friends.js');


// Includes Two Routes
function apiRoutes(app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  // 
  app.post('/api/friends', function (req, res) {

    // Parse new friend input to get integers
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;


    // Cross check the new friend
    var scoreComparisionArray = [];
    for(var i=0; i < friendsData.length; i++){

      // Check each friend's scores 
      var currentComparison = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

      //  comparison between friends to array
      scoreComparisionArray.push(currentComparison);
    }

    // the best match using the postion of best match  the friendsData 
    var bestMatchPosition = 0; // 
    for(var i=1; i < scoreComparisionArray.length; i++){
      
      //  comparison difference 
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
        bestMatchPosition = i;
      }

    }

    
    var bestFriendMatch = friendsData[bestMatchPosition];



    // Reply with a JSON 
    res.json(bestFriendMatch);



    // Push the new friend
    friendsData.push(newFriend);

  });

}



module.exports = apiRoutes;