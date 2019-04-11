console.log('HTML Route Connected Successfully');


// Node Dependencies
var path = require('path');


// Includes Two Routes
function htmlRoutes(app) {

  // A GET Route to  display the survey page.
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}



module.exports = htmlRoutes;
