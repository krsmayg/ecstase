const factory = require('./handlerFactory');
const Collection = require('../models/collectionModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllCollections = factory.getAll(Collection);
exports.createCollection = factory.createOne(Collection);
exports.getCollection = factory.getOne(Collection, {path: 'posters',model: 'Poster'});
exports.deleteCollection = factory.deleteOne(Collection);
exports.updateCollection = factory.updateOne(Collection);
