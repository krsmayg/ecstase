const factory = require('./handlerFactory');
const Collection = require('../models/collectionModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllCollections = factory.getAll(Collection);
exports.createCollection = factory.createOne(Collection);
exports.getCollection = factory.getOne(Collection, {path: 'posters',model: 'Poster'});
exports.deleteCollection = factory.deleteOne(Collection);
exports.updateCollection = factory.updateOne(Collection);

// exports.getCollection = catchAsync(async (req, res, next) => {
//     const doc = await Collection.findById(req.params.id).populate({path: 'posters',model: 'Poster'});
//     if (!doc) {
//       return next(new AppError('No document found with that ID', 404)); // return нужен чтобы сразу закончить выполнение кода, а не переходить к res.status
//     }
//     res.status(200).json({
//       status: 'succes',
//       data: {
//         doc
//       }
//     });
// });