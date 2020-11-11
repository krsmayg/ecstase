const mongoose = require('mongoose');
const slugify = require('slugify');
const posterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Poster must have a name!!'],
    unique: true,
    trim: true,
    maxlength: [40, 'A poster must have less or equal then 40 characters'],
    minlength: [5, 'A poster must have at least 5 characters']
  },
  slug: String,
  ratingsAverage: {
    type: Number,
    default: 4.5,
    max: [5, 'Rating must be less or equal 5.0'],
    min: [1, 'Rating must be equal or  above 1.0'],
    set: val => Math.round(val * 10) / 10 //4.6666 -> 46.666 -> 47 -> 4.7
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A poster must have a price!!']
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function(val) {
        // THIS ONLY POINTS TO CURRENT DOCUM. WHEN YOU CREATE A NEW OBJECT!!!!!!!
        return val < this.price;
      },
      message: ' Discount price ({VALUE}) should be below regular price'
    }
  },
  description: {
    type: String,
    trim: true
  },
  size: {
    type: String,
    default: 'M',
    enum: ['S', 'M', 'L']
  },
  artist: {
    type: String,
    required: true,
    default: 'Steve Wade'
  },
  collectionType: {
    type: String,
    default: 'Stars'
  },
  imageCover: {
    type: String,
    // required: [true, 'A poster must have a cover image']
  },
  imageCoverHover: {
    type: String,
    // required: [true, 'A poster must have a hover image']
  },
  imageWall: {
    type: String,
  },
  images: [String],
  amountArray: [
    {
      name: {
        type: String,
        default: 'M',
        enum: ['S', 'M', 'L']
      },
      current: Number,
      of: Number,
    }
  ],
  totalAmountLeft: {
    type: Number,
  },
  totalAmountOf: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

posterSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { 
    lower: true,
    replacement: '-'
  });
  next();
});

posterSchema.pre('save', function(next) {
  this.totalAmountLeft = this.amountArray.reduce((total,el) => {
    return total += el.current;
  },0);

  this.totalAmountOf = this.amountArray.reduce((total,el) => {
    return total += el.of;
  },0);
  next();
});


const Poster = mongoose.model('Poster', posterSchema);
module.exports = Poster;

