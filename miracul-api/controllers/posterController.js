const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const Poster = require('../models/posterModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllPosters = factory.getAll(Poster);
exports.createPoster = factory.createOne(Poster);

exports.getPoster = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const poster = await Poster.findOne({ slug: req.params.slug },(error,post) => {
    console.log(error, post);
  });
  if (!poster) {
    return next(new AppError('There is no poster with that name.', 404));
  }

  res.status(200).json({
    status: 'succes',
    data: {
      poster
    }
  });
});
