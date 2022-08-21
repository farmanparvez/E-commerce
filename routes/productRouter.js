const express = require("express");
const productRouter = express.Router();
const protect = require("../middleware/protect");
const checkAdmin = require("../middleware/checkAdmin");
const productController = require("../controllers/productController");

// productRouter.route('/admin/users').get(protect, checkAdmin, userController.users)
productRouter
  .route("/admin/user/product")
  .post(protect, checkAdmin, productController.createProduct)
  .get(protect, checkAdmin, productController.getAdminProductByID);
productRouter
  .route("/admin/user/product/:id")
  .delete(protect, checkAdmin, productController.deleteAdminProductByID)
  .patch(protect, checkAdmin, productController.updateAdminProductByID);
productRouter.route("/products").get(productController.getProduct);
productRouter
  .route("/topratingproducts")
  .get(productController.getTopRatedProducts);

productRouter.route("/product/:id").get(productController.getProductByID);
productRouter
  .route("/product/reviews/:id")
  .post(protect, productController.productReview);
productRouter
  .route("/product/productType/:type")
  .get(productController.getProductByType);
// productRouter.route('/products').get(productController.getProduct)
// productRouter.route('/admin/user/product').post(protect, checkAdmin, productController.createProduct).get(productController.getProduct)
// productRouter.route('/user').get(protect, userController.userProfile)
// userRouter.route('/user/:id').get(protect, userController.userByID)

module.exports = productRouter;
