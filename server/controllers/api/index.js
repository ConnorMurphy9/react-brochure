const router = require('express').Router();
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const pizzaRoutes = require('./pizza-routes');



router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/pizzas', pizzaRoutes);


router.get('/', function(req, res, next) {  
    res.status(200).send("Hi, it works!")  
}); 

module.exports = router;
