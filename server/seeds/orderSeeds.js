const { Order } = require('../models');
    
const orderData = [
    {
      userId: 1,
      total: 10.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      total: 24.98,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      total: 19.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const seedOrders = () => Order.bulkCreate(orderData, {
    individualHooks: true,
});

module.exports = seedOrders