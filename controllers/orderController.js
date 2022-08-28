const catchAsync = require("../utils/catchAsync");
const Order = require("../models/orderModal");
const AppError = require("../utils/AppError");

exports.addOrder = catchAsync(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  console.log(req.body)
  const order = await Order.create({
    orderItems,
    user: req.user._id,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });
  res.status(200).json({
    status: "Success",
    message: "Order Placed Successfully",
    order,
  });
});


exports.getOrderDetails = catchAsync( async(req, res, next) => {
  const order = await Order.findById(req.params.id)
  res.status(200).json({
    status: 'Success',
    message: "Successfully",
    order
  })
})

exports.updateOrderToPaid = catchAsync( async(req, res, next) => {

  const  { id, status, update_time, payer } = req.body
  // const order = await Order.findById(req.params.id)
  // console.log(req.body)
  // console.log(req.params.id)

  const data = {
    isPaid: true,
    paidAt: Date.now(),
    paymentResults: {
      id,
      status,
      update_time,
      email_address: payer.email_address
    }
  }
  const order = await Order.findByIdAndUpdate(req.params.id, { $set: data }, { new: true, runValidators: true})
  console.log(order)
  if(!order) return new (new AppError('Order Not Found')) 

  res.status(200).json({
    status: 'Success',
    message: "order Updated Successfully",
    order
  })
})

exports.updateOrderToDelivered = catchAsync( async(req, res, next) => {

  const  { id, status, update_time, payer } = req.body
  // const order = await Order.findById(req.params.id)
  // console.log(req.body)
  // console.log(req.params.id)

  const data = {
    isDelivered: true,
    deliveredAt: Date.now(),
  }
  const order = await Order.findByIdAndUpdate(req.params.id, { $set: data }, { new: true, runValidators: true})
  // console.log(order)
  if(!order) return new (new AppError('Order Not Found')) 

  res.status(200).json({
    status: 'Success',
    message: "Order Status Updated Successfully",
    order
  })
})

exports.getOrders = catchAsync( async(req, res, next) => {
  const orders = await Order.find()
  res.status(200).json({
    count: orders.length,
    status: 'success',
    message: 'All orders',
    orders
  })
})

exports.getOrderByUserId = catchAsync( async(req, res, next) => {
  const orders = await Order.find({ user: req.user._id})
  res.status(200).json({
    count: orders.length,
    status: 'success',
    message: 'Order Details',
    orders
  })
})

exports.getOrderByAdminId = catchAsync( async(req, res, next) => {
  const orders = await Order.find({ user: req.user._id})
  res.status(200).json({
    count: orders.length,
    status: 'success',
    message: 'Order Details',
    orders
  })
})