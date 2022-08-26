const mongoose = require('mongoose')

const connectDB = async() => {
    try {
       const conn =  await mongoose.connect(process.env.DATABASE.replace('<password>', process.env.PASSWORD))
        console.log(`mongodb connected----> ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error ${error.message}`)
        process.exit(1)
    }
    
}

module.exports = connectDB