const { Schema, model } = require('mongoose');


// const bcrypt = require('bcrypt');

// const userSchema = require('./User');

const characterSchema = new Schema(
    {   //CHANGE USERID TO USERNAME
        characterName: String,
        characterClass: String,
        characterRace: String,
        resources: [{
            resourceName: String,
            min: Number,
            max: Number,
            current: Number
        }],
        stats: [{
            statName: String,
            statNum: Number,
            //add more to stats, modifiers and such...
        }],
        characterNotes: [String],
        moveSet: [{
            abilityName: String,
            range: Number,
            rangeType: String,
            cost: Number,
            costType: String,
            Damage: Number,
            damageType: String,
            description: String
        }]
        //need to link campaign or setting notes here


        // createdAt: {type: Date, default: Date.now}
        // https://stackoverflow.com/questions/50934800/add-field-not-in-schema-with-mongoose
        //


        /*
const ToySchema = new Schema();
ToySchema.add({ name: 'string', color: 'string', price: 'number' });

const TurboManSchema = new Schema();
// You can also `add()` another schema and copy over all paths, virtuals,
// getters, setters, indexes, methods, and statics.
TurboManSchema.add(ToySchema).add({ year: Number });
https://mongoosejs.com/docs/api.html#schema_Schema-add
        */
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
