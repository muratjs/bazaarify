const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const { body } = require('express-validator');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title', 'Title is wrong')
      .isString()
      .isLength({ min: 3, max: 20 })
      .trim(),
    body('price').isFloat(),
    body('description').isLength({ min: 5, max: 255 }).trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

// /admin/edit-product/:productId => GET
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

// /admin/edit-product => POST
router.post(
  '/edit-product',
  [
    body('title', 'Title is wrong')
      .isString()
      .isLength({ min: 3, max: 20 })
      .trim(),
    body('price').isFloat(),
    body('description').isLength({ min: 5, max: 255 }).trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

// /admin/delete-product => POST
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
