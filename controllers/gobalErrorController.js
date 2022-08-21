const AppError = require('../utils/AppError')

const JsonWebTokenError = (err) => {
    return new AppError('Invalid token', 400)
}
const TokenExpiredError = (err) => {
    return new AppError('Session expired, Please login again', 400)
}

const sendProdError = (err, res) => {
    
    if(err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
    })} else{
        console.log('ERROR', err)
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong',
            // stack: err.stack,
        })
    }

}

const sendDevError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        err,
        stack: err.stack,
    })
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if(process.env.NODE_ENV === 'development'){
        sendDevError(err, res)
    } else if (process.env.NODE_ENV.trim() === 'production') {
        let error = err
        // console.log(err)
        if(err.name === 'JsonWebTokenError') error = JsonWebTokenError(err)
        if(err.name === 'TokenExpiredError') error = TokenExpiredError(err)
        sendProdError(error, res)
    }
}