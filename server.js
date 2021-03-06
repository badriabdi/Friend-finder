var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



// Link in html and api routes
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');



// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;



//  Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



// Server Routing Map 
apiRoutes(app); 
htmlRoutes(app); 


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
