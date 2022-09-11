const catchAsync = require("../utils/catchAsync");
const Product = require('../models/productModal')
const User = require('../models/auth')
const AppError = require('../utils/AppError');

// <============================================================admin=====================================================>
exports.getAdminProductByID = catchAsync( async(req, res, next) => {
    // const {name, price, image, brand, category, countInStock, numReviews, description} = req.body
    // console.log(req.user._id)
    const product = await Product.find({ user: req.user._id })
    res.status(200).json({
        status: 'Success',
        product
    })
})

exports.createProduct = catchAsync( async(req, res, next) => {
    const {name, price, image, brand, category, countInStock, numReviews, description, type} = req.body
    console.log(type)
    const product = await Product.create({
        name,
        type,
        price,
        user: req.user._id,
        image,
        brand,
        category,
        countInStock,
        numReviews,
        description
    }) 
    res.status(200).json({
        status: 'Success',
        message: 'Product created successfully',
    })
})

exports.deleteAdminProductByID = catchAsync( async(req, res, next) => {
    // const {name, price, image, brand, category, countInStock, numReviews, description} = req.body
    const product = await Product.findById(req.params.id)
    // console.log('product', product.user._id)
    // console.log('user', req.user._id)
    if(product.user.toString() !== req.user._id.toString()) return next(new AppError('Your are not authorized login in again....', 400))
    // console.log(product._id !== req.user._id)
    await Product.findByIdAndDelete(req.params.id) 
    res.status(200).json({
        status: 'Success',
        message: 'Product deleted successfully'
    })
})

exports.updateAdminProductByID = catchAsync( async(req, res, next) => {
    const {name, price, image, brand, category, countInStock, description, type} = req.body
    
    const product = await Product.findById(req.params.id)
    // console.log('product', product.user._id)
    // console.log('user', req.user._id)
    if(product.user.toString() !== req.user._id.toString()) return next(new AppError('Your are not authorized login in again....', 400))
    // console.log(product._id !== req.user._id)
    const data = { name, price, image, brand, category, countInStock, description, type }
    await Product.findByIdAndUpdate(req.params.id, { $set: data }, { new: true, runValidators: true})
    // await Product.findByIdAndDelete(req.params.id) 
    res.status(200).json({
        status: 'Success',
        message: 'Product Updated successfully'
    })
})



// <=================================================================user=========================================================>

class APIFeatures {
    constructor(api, query){
        this.api = api,
        this.query = query
    }
// console.log(query)
    pagination(){
        const page = this.query.page
        const limit = this.query.limit
        const skip = (page - 1) * limit
        this.api = this.api.skip(skip).limit(limit)
        return this
    }

}

// console.log()

exports.getProduct = catchAsync( async(req, res, next) => {
    // const {name, price, image, brand, category, countInStock, numReviews, description} = req.body
    // console.log(req.query)
    // const page = req.query.page
    // const limit = req.query.limit
    // const skip = (page - 1) * limit

//  const query = query
//  console.log(query)

    // const product = await Product.find().skip(skip).limit(limit)
    const count = await Product.find()
    const query = new APIFeatures(Product.find(), req.query).pagination()
    // console.log(product)
    const product = await query.api
    res.status(200).json({
        status: 'Success',
        count: count.length,
        product,
    })
})

exports.getProductByID = catchAsync( async( req, res, next ) => {
    const product = await Product.findById(req.params.id)
    if(!product) return next(new AppError('No product found', 400))
    res.status(200).json({
        status: 'Success',
        product
    })
})

exports.productReview = catchAsync( async(req, res, next) => {
    const { rating, comment } = req.body
    // console.log(req.user)
    const product = await Product.findById( req.params.id )
    if(product) {
        const alreadyReview = product.reviews.find(r => r.user.toString() === req.user._id.toString())
        if(alreadyReview) return next(new AppError('Product Already Reviewed'))
    }

    const review = {
        name: req.user.username,
        rating: Number(rating),
        comment,
        user: req.user._id
    }
    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
    
    await product.save()

    // console.log(product)
    res.status(200).json({
        status: 'succes',
        message: 'Review Added Successfully',
        product
    })
})

exports.getTopRatedProducts = catchAsync( async( req, res, next ) => {
    const product = await Product.find({}).sort({rating: -1}).limit(3)
    if(!product) return next(new AppError('No product found', 400))
    res.status(200).json({
        status: 'Success',
        product
    })
})

exports.getProductByType = catchAsync( async( req, res, next ) => {
    // const { type } = req.body
    // console.log(req.params)
    if(!req.params.type) return next(new AppError('Please Provide Product Type', 400))
    
    const count = await Product.find({ type: req.params.type })
    const query = new APIFeatures(Product.find({ type: req.params.type }), req.query).pagination()
// console.log(query)
    const product = await query.api
    res.status(200).json({
        count: count.length,
        status: 'Success',
        product
    })
})