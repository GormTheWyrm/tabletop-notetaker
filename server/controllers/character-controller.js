//this will hold most data!
//will need to create a way to log in as the character...


// debating whether spells should be defined within character...
//...easier for now, but definitely want to add the ability to pull existing spells in from a common db


const { Character } = require('../models'); //this is not working yet!

module.exports = {
  // gets all data- may need to remove later
  async getAllData(req, res) {    // this function works now
    const allData = await Character.find();
    if (!allData) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    return res.json(allData);
  },
// update sections...






  //simple tests
  async testFunction(req, res) {    // this function works now
    
    return res.json("this is a character test");
  },
  async testFunction2(req, res) {    // this function works now
    
    return res.json("this is a character test too");
  },


};

