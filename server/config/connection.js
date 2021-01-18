const mongoose = require('mongoose');
//this file is not being imported...?
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tabletop_notetaker_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));


module.exports = mongoose.connection;
//need to export and import this properly
