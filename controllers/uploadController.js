const multer = require('multer')
const AppError = require('../utils/AppError')

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads')
    },
    filename(req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        cb(null, `user-${req.user._id}-${Date.now()}.${ext}`)
    },
  })
  
const milterFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images', 400), false)
    }
}
  
const upload = multer({ storage, fileFilter: milterFilter })

module.exports = upload
  