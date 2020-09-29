//pulling this from bootcamp final project

const express = require('express');
const path = require('path');
const db = require('./config/connection');  //not set up yet?
const routes = require('./routes');

// const mongoose = require("mongoose");    //should use elsewhere
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// use static if in production... may need tweaking for different hosting locations?
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../client/build'))); //70% sure this will need to be tweaked for production
}
// Add routes, both API and view
app.use(routes);


/*
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
//replace the above chunk with the below line, to add listener and db from other folders
*/


db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
  });