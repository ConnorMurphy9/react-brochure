const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const orderRoutes = require('./order-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

router.get('/', function(req, res, next) {  
    res.status(200).send("Hi, It works!")  
}); 

module.exports = router;
