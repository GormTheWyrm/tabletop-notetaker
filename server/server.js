//pulling this from bootcamp final project
//might need to require mongodb...
//I don;t see where the actual database is connected...


const express = require('express');
const path = require('path');
const db = require('./config/connection');  //not set up yet?
//this is an issue... 
//monsgoose.connection
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// const mongoose = require("mongoose");    



// use static if in production... may need tweaking for different hosting locations?
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build'))); //70% sure this will need to be tweaked for production
}
// Add routes, both API and view
app.use(routes);
// next step is to connect to the database. Currently trying to host frontend first


db.once('open', () => {  //removed to try and get heroku to work
app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));  //uncommented to try and get heroku to work
  });  //removed to try and get heroku to work





/* this worked on a simpel app with no database:
const express = require('express');
// const favicon = require('express-favicon'); //look this up
const { dirname } = require('path');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico')); //is this needed?
// if using this need to npm i express-favicon
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res){
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
*/

