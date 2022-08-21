const path = require('path')
const express = require("express");
const AppError = require("./utils/AppError");
const globalErroHander = require("./controllers/gobalErrorController");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const uploadRouter = require("./routes/uploadRouter");
const orderRouter = require("./routes/orderRouter");
const app = express();

app.use(express.json());

// app.use(express.static(path.join(__dirname, 'uploads')));

// app.get('/', (req, res) => res.send('server is running'))
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/uploads", uploadRouter);

app.use(`/uploads`, express.static(`uploads`));
// app.use(express.static(path.join(__dirname, './uploads')));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
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
