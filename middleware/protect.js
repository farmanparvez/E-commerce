const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')
const jwt = require('jsonwebtoken')
const Auth = require('../models/auth')


const protect = catchAsync( async(req, res, next) => {
    let token
    // console.log("req token" ,req.headers.authorization)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
    } 
    // console.log("token", token)
    if(!token) return next(new AppError('No token found, Not Authorized', 400))
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decode)
    // if(!decode) return next(new AppError('Invalid token'))
    const user = await Auth.findById(decode.user)
    // console.log(user)
    req.user = user
    next()
})

module.exports = protect;