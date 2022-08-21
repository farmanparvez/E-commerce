const express = require('express')
const uploadRouter = express.Router()
const protect = require('../middleware/protect')
const upload = require('../controllers/uploadController')
const userController = require('../controllers/userController')

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename(req, file, cb) {
//         const ext = file.mimetype.split('/')[1];
//         cb(null, `user-${req.user._id}-${Date.now()}.${ext}`)
//     },
//   })
  
// const milterFilter = (req, file, cb) => {
//     if(file.mimetype.startsWith('image')){
//         cb(null, true);
//     } else {
//         cb(new AppError('Not an image! Please upload only images', 400), false)
//     }
// }
  
//   const upload = multer({
//     storage,
//     fileFilter: milterFilter
//   })
  
uploadRouter.post('/', protect, upload.single('image'), userController.uploadImage)
// console.log()

module.exports = uploadRouter
// const path = require('path')
// const express = require('express')
// const uploadRouter = express.Router()
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename(req, file, cb) {
//       cb(
//         null,
//         `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//       )
//     },
//   })
  
//   function checkFileType(file, cb) {
//     const filetypes = /jpg|jpeg|png/
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//     const mineType = filetypes.test(file.mineType)
  
//     if (extname && mineType) {
//       return cb(null, true)
//     } else {
//       cb('Images only!')
//     }
//   }
  
//   const upload = multer({
//     storage,
//     fileFilter: function (req, file, cb) {
//       checkFileType(file, cb)
//     },
//   })
  
//   uploadRouter.post('/', upload.single('image'), (req, res) => {
//     res.send(`/${req.file.path}`)
//   })
  

// module.exports = uploadRouter