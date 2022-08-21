const catchAsync = require("../utils/catchAsync");
const Auth = require("../models/auth");
const AppError = require('../utils/AppError')
const upload = require('./uploadController')

exports.userProfile = catchAsync(async (req, res, next) => {
    const user = await Auth.findById(req.user._id).select("-password");
    // console.log(user)
    res.status(200).json({ status: "Success", data: user });
});

//   <===========================================Admin===============================================>
exports.users = catchAsync(async (req, res, next) => {
    // console.log(req.user)
    // if(!req.user.isAdmin) return next(new AppError('Not Authorized', 400))
    const auth = await Auth.find().select("-password");;
    res.status(200).json({ data: auth });
});

exports.deleteUserByID = catchAsync(async (req, res, next) => {
    // console.log(req.user)
    // if(!req.user.isAdmin) return next(new AppError('Not Authorized', 400))
    const user = await Auth.findByIdAndDelete(req.params.id)
    if(!user) return next(new AppError('No user found to delete', 400))
    res.status(200).json({ status: 'Success', message: 'User deleted Successfully' });
});

exports.updateUserByID = catchAsync(async (req, res, next) => {
    // console.log(req.user)
    // if(!req.user.isAdmin) return next(new AppError('Not Authorized', 400))
    const { username, email, isAdmin } = req.body
    const data = { username, email, isAdmin }
    await Auth.findByIdAndUpdate(req.params.id, {$set: data}, {new: true, runValidators: true})
    // if(!user) return next(new AppError('No user found to delete', 400))
    res.status(200).json({ status: 'Success', message: 'User updated Successfully' });
});

exports.uploadImage = catchAsync( async (req, res, next) => {
    res.send(`${req.file.path}`)
})


