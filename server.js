const app = require('./app')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

connectDB();
console.log(process.env.NODE_ENV)
const Port = 8000 || process.env.PORT

app.listen(Port, () => console.log(`app is running at ${Port}`))