// const router = require('express').Router();
// const { Order, Product, User } = require('../../models');

// // GET all orders
// router.get('/', async (req, res) => {
//   try {
//     const orderData = await Order.findAll();
//     res.status(200).json(orderData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE an order
// router.post('/', async (req, res) => {
//   try {
//     const orderData = await Order.create(req.body);
//     res.status(200).json(orderData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE an order
// router.delete('/:id', async (req, res) => {
//   try {
//     const orderData = await Order.destroy({
//       where: { id: req.params.id }
//     });
//     if (!orderData) {
//       res.status(404).json({ message: 'No order with this id!' });
//       return;
//     }
//     res.status(200).json(orderData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
