const mongoose = require('mongoose');
// const Poster = require('./posterModel');
const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [5, 'A Collection of Posters must have at least 5 characters'],  
        maxlength: [15, 'A Collection of Posters must maximum 15 characters'],     
    },
    // posters: {
    //     type: Array,
    //     maxlength: 3,
    //     required: true
    // },
    posters: [
       { 
           type: mongoose.Schema.ObjectId,
           ref: 'Poster'
       }
    ],
    imageCollection: {
        type: String,
        required: [true, 'Collection must have an image']
    }
    },
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

// collectionSchema.pre('save', async function(next) {
//     const postersPromises = this.posters.map(async id => await Poster.findById(id));
//     this.posters = await Promise.all(postersPromises)
//     next();
// })

collectionSchema.pre(/^find/, function(next) {
    this.find().populate({
        path:'posters',
    });
    next();
});
const Collection = mongoose.model('Collection', collectionSchema);
module.exports = Collection;