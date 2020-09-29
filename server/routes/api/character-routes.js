const router = require('express').Router();

const {
   getAllData,
   testFunction,
   testFunction2,

   //add in functions from controller here...
} = require('../../controllers/character-controller');


// get all comments 
router.route('/test/all').get(getAllData);   // not working
router.route('/test/').get(testFunction); //this worked!
router.route('/test/2').get(testFunction2);

module.exports = router;