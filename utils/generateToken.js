const jwt = require('jsonwebtoken')

const token = (id) => {
    return jwt.sign({ user: id }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN } )
}

module.exports = token
