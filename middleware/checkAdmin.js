const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const checkAdmin = catchAsync(async (req, res, next) => {
  if (req?.user?.role?.includes('3497')) {
    next();
  } else {
    next(new AppError("Not Authorized", 400));
  }
});

module.exports = checkAdmin;
