const router = require('express').Router();
const userRoutes = require('./users');
const productRoutes = require('./product-routes');
const orderRoutes = require('./order-routes');
const pizzaRoutes = require('./pizzas');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/pizzas', pizzaRoutes);


router.get('/', function(req, res, next) {  
    res.status(200).send("Hi, it works!")  
}); 

module.exports = router;
