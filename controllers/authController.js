const catchAsync = require("../utils/catchAsync");
const Auth = require("../models/auth");
const generateToken = require("../utils/generateToken");
const AppError = require("../utils/AppError");

exports.signUp = catchAsync(async (req, res, next) => {
  const { username, email, password, confirmPassword, isAdmin } = req.body;

  const auth = await Auth.findOne({ email });

  if (auth) return next(new AppError("User already exits", 400));

  const user = await Auth.create({
    username,
    email,
    password,
    confirmPassword,
    isAdmin,
  });

  token = generateToken(user._id);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // secure: true,
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("jwt", token, cookieOption);

  res.status(200).json({
    status: "Success",
    token,
    user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("Please provide a valid email and password"));
  const user = await Auth.findOne({ email });

  if (!user) return next(new AppError("Invalid credentials"));
  const isMatch = await user.correctPassword(password, user.password);

  if (!isMatch) return next(new AppError("Email or password not correct"));
  const token = generateToken(user._id);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // secure: true,
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("jwt", token, cookieOption);

  res.status(200).json({
    status: "Success",
    message: "Login Successfully",
    token,
    user,
  });
});
