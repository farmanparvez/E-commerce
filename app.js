const path = require("path");
const express = require("express");
const AppError = require("./utils/AppError");
const helmet = require("helmet");
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const globalErroHander = require("./controllers/gobalErrorController");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const uploadRouter = require("./routes/uploadRouter");
const orderRouter = require("./routes/orderRouter");
const app = express();

//Golobal Middleware
app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: 'Too many request from thi IP, Please try again in an hour'
})
// limit no of request per hour
app.use('/api', limiter)

// body parser
app.use(express.json({ limit: "10kb" }));
// Data sanitization againt nosql query injection 
app.use(mongoSanitize())

// Data sanitization againt xss
app.use(xss())
// app.use(express.static(path.join(__dirname, 'uploads')));

// app.get('/', (req, res) => res.send('server is running'))
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/uploads", uploadRouter);

app.use(`/uploads`, express.static(`uploads`));
// app.use(express.static(path.join(__dirname, './uploads')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

app.all("*", (req, res, next) => {
  // const error = new Error (`can't find ${req.originalUrl} on this server`)
  // error.status = 'Failed',
  // error.statusCode = 400
  // next(error)
  next(new AppError(`can't find ${req.originalUrl} on this server`, 400));
});
app.use(globalErroHander);

module.exports = app;
