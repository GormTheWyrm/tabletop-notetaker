//routes index
const router = require('express').Router();
const path = require('path');    //do I need this?
const apiRoutes = require('./api');

router.use('/api', apiRoutes);  //clicking this sends me to the api folder index.js

// serve up react front-end in production
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    // https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
  });
  //issue- no build folder yet... ?
  module.exports = router;