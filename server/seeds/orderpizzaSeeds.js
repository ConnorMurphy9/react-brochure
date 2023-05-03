const { OrderPizza } = require('../models');

const orderPizzasData = [
    {
      orderId: 1,
      pizzaId: 1,
      quantity: 1,
      price: 10.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderId: 2,
      pizzaId: 1,
      quantity: 2,
      price: 21.98,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderId: 2,
      pizzaId: 2,
      quantity: 1,
      price: 14.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      orderId: 3,
      pizzaId: 3,
      quantity: 1,
      price: 19.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const seedOrderPizzas = () => OrderPizza.bulkCreate(orderPizzasData, {
    individualHooks: true,
});

module.exports = seedOrderPizzas