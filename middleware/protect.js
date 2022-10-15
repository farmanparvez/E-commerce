const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");

const protect = catchAsync(async (req, res, next) => {
  // let token;
  // // console.log("req token" ,req.headers.authorization)
  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   // token = req.headers.authorization.split(" ");
  //   // console.log(typeof(token[1]))
  //   // console.log(token[1])
  //   token = req.headers.authorization.split(" ")[1];
  // }
  // console.log(req.headers.cookie)
  // console.log(req.cookies.token);
  // const cookie = req.headers.cookie.split(';')
  // let glbalarr = []
  // const n = cookie.forEach(element => {
  //   const [name, val ] = element.split('=')
  //   // console.log(name, val)
  //   var obj = {}
  //   obj[name?.trim()] = val
  //   glbalarr.push(obj)
  // });
  // const { token } = glbalarr.find(el => el.token)
  // console.log(token)

  const token = req?.cookies?.token;
  if (!token) return next(new AppError("No token found, Not Authorized", 400));
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // console.log(decode)
  // if(!decode) return next(new AppError('Invalid token'))
  const user = await Auth.findById(decode.user);
  // console.log(user)
  req.user = user;
  next();
});

module.exports = protect;
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/AppError");
// const jwt = require("jsonwebtoken");
// const Auth = require("../models/auth");

// const protect = catchAsync(async (req, res, next) => {
//   let token;
//   // console.log("req token" ,req.headers.authorization)
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     // token = req.headers.authorization.split(" ");
//     // console.log(typeof(token[1]))
//     // console.log(token[1])
//     token = req.headers.authorization.split(" ")[1];
//   }
//   const cookie = req.headers.cookie.split(';')
//   let glbalarr = []
//  cookie.forEach(element => {
//     const [name, val ] = element.split('=')
//     // console.log(name, val)
//     var obj = {}
//     obj[name?.trim()] = val
//     glbalarr.push(obj)
//   });
//   // console.log(glbalarr)
//   const jwttok = glbalarr.find(el => el.jwt)
//   console.log(jwttok)
// //   console.log(cookieq)
// //   console.log(typeof(cookie));
// //   console.log(req.headers.cookie)
// //   console.log(req.cookie)
//   // console.log(req.headers.cookie.split(';'))
//   // console.log("token", token)
//   if (!token) return next(new AppError("No token found, Not Authorized", 400));
//   const decode = jwt.verify(token, process.env.JWT_SECRET);
//   // console.log(decode)
//   // if(!decode) return next(new AppError('Invalid token'))
//   const user = await Auth.findById(decode.user);
//   // console.log(user)
//   req.user = user;
//   next();
// });

// module.exports = protect;
