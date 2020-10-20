const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const User = require('../models/userModel')
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
  // Проходимся в цикле по полям в obj
  // Для каждого поля проверяем один из allowedFields
  // Создаем новый обект с новым полем с идентичным именем с тем же значением с оригинального объекта
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1)Create error if user POST's password data
  if (req.body.password || req.passwordConfirm) {
    next(
      new AppError(
        'This route is not for password updates. Please use / updateMyPassword',
        400
      )
    );
  }
  // 2)Filtered out unwanted fields names thar are not allowed to be updated
  const filterdBody = filterObj(req.body, 'name', 'email');
  // 3)Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filterdBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'succes',
    data: {
      updatedUser
    }
  });
});
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: 'succes',
    data: null
  });
});
exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
//DO NOOT update Password with this!!!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);