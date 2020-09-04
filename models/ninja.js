const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// "geometry": {
//     "type": "Point",
//     "coordinates": [125.6, 10.1]
//   }


//Create Ninja Schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    rank: {
        type: String,

    },

    available: {
        type: Boolean,
        default: false
    },

    long: {

    },

    lat : {

    }
});


const Ninja = mongoose.model('ninja', NinjaSchema);


module.exports = Ninja;