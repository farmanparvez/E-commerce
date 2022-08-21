const express = require('express')
const userRouter = express.Router()
const protect = require('../middleware/protect')
const checkAdmin = require('../middleware/checkAdmin')
const userController = require('../controllers/userController')

userRouter.route('/admin/users').get(protect, checkAdmin, userController.users)
userRouter.route('/admin/user/:id').delete(protect, checkAdmin, userController.deleteUserByID).patch(protect, checkAdmin, userController.updateUserByID)
userRouter.route('/user').get(protect, userController.userProfile)
// userRouter.route('/user/:id').get(protect, userController.userByID)

module.exports = userRouter