const express = require('express')
const orderRouter = express.Router()
const orderController = require('../controllers/orderController')
const protect = require('../middleware/protect')

orderRouter.route('/').post(protect, orderController.addOrder).get(orderController.getOrders)
orderRouter.route('/user').get(protect, orderController.getOrderByUserId)
orderRouter.route('/:id').get(protect, orderController.getOrderDetails).post(protect, orderController.updateOrderToDelivered)
orderRouter.route('/:id/pay').patch(protect, orderController.updateOrderToPaid)
// orderRouter.route('/').patch(protect, orderController.updateOrderToPaid)

module.exports = orderRouter