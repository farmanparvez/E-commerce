const catchAsync = require("../utils/catchAsync");
// const Auth = require('../models/auth');
const AppError = require("../utils/AppError");

const checkAdmin = catchAsync(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    next(new AppError("Not Authorized", 400));
  }
  // if(!req.user) return next(new AppError('Login expired, Please login again', 400))
});

module.exports = checkAdmin;
