const { Schema, model } = require('mongoose');


// const bcrypt = require('bcrypt');

// const userSchema = require('./User');

const characterSchema = new Schema(
    {   //CHANGE USERID TO USERNAME
        characterName: String,
        stat1: {
            stat: String,
            min: Number,
            max: Number

        },
        stat2: {},
        stat3: {},
        stat4: {}
        // createdAt: {type: Date, default: Date.now}
    }
);

// hash user password
//   userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
//   });




// do I need a hook to grab the references?

const Character = model('Character', characterSchema);

module.exports = Character;
