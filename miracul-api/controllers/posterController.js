const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const Poster = require("../models/posterModel");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");
const multer = require("multer");
const sharp = require("sharp");
const { v5: uuidv5 } = require('uuid');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image, pls upload only images.", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadPosterImages = upload.fields([
  {
    name: "imageCover",
    maxCount: 1,
  },
  {
    name: "imageCoverHover",
    maxCount: 1,
  },
  {
    name: "imageWall",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 4,
  },
]);

exports.resizePosterImages = catchAsync(async (req, res, next) => {
  
  if (!req.files.imageCover || !req.files.images || !req.files.imageCoverHover || !req.files.imageWall) return next();
  console.log(req.files);
  const key = uuidv5(
    `${Math.random()} ${Date.now()}`,
    uuidv5.DNS
  ).split("-")[4];


  req.body.imageCover = `poster-${key}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/posters/${req.body.imageCover}`);

  req.body.imageCoverHover = `poster-${key}-${Date.now()}-coverHover.jpeg`;
  await sharp(req.files.imageCoverHover[0].buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/posters/${req.body.imageCoverHover}`);

  req.body.imageWall = `poster-${key}-${Date.now()}-wall.jpeg`;
  await sharp(req.files.imageWall[0].buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/posters/${req.body.imageWall}`);


  req.body.images = [];
  if(req.files.images) {
    await Promise.all(
      req.files.images.map(async (file, i) => {
        const filename = `poster-${key}-${i+1}-${Date.now()}.jpeg`;
        await sharp(file.buffer)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`public/images/posters/${filename}`);
        req.body.images.push(filename);
      })
    );
  }
  next();
});
exports.getAllPosters = factory.getAll(Poster);
exports.createPoster = factory.createOne(Poster);
exports.getPosterById = factory.getOne(Poster);
exports.updatePosterById = factory.updateOne(Poster);
exports.deletePosterById = factory.deleteOne(Poster);
exports.getPoster = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const poster = await Poster.findOne(
    { slug: req.params.slug },
    (error, post) => {
      console.log(error, post);
    }
  );
  if (!poster) {
    return next(new AppError("There is no poster with that name.", 404));
  }

  res.status(200).json({
    status: "succes",
    data: {
      poster,
    },
  });
});
