const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tabletop_notetaker_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
/*
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));
removed this to try and get heroku to work
*/

module.exports = mongoose.connection;
