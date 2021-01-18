const mongoose = require('mongoose');
//I don't think this file is being reached...
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/tabletop_notetaker_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})

.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));


module.exports = mongoose.connection;
