const router = require('express').Router();
const { Order, Pizza, User } = require('../../models');

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orderData = await Order.findAll();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE an order
router.post('/', async (req, res) => {
  try {
    const orderData = await Order.create(req.body);
    res.status(200).json(orderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE an order
router.delete('/:id', async (req, res) => {
  try {
    const orderData = await Order.destroy({
      where: { id: req.params.id }
    });
    if (!orderData) {
      res.status(404).json({ message: 'No order with this id!' });
      return;
    }
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// app.get('/api/orders/history', authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const orderHistory = await Order.findAll({
//       where: { userId },
//       include: [{ model: Product, as: 'items' }],
//       order: [['createdAt', 'DESC']],
//     });
//     res.json(orderHistory);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const orderData = await Order.findByPk(req.params.id, {
//       include: [
//         {
//           model: Order,
//           attributes: ["text", ],
//         },
//       ],
//     });
//     res.status(200).json(orderData)
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
