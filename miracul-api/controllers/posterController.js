const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const Poster = require('../models/posterModel')

exports.getAllPosters = factory.getAll(Poster);
exports.createPoster = factory.createOne(Poster);
