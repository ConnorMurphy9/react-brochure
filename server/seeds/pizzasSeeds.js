const { Pizza } = require('../models');

const pizzaData = [
    {
      name: "Chicago Style Pizza",
      price: 9.99,
      description: "A delicious pizza",
    },
    {
      name: "Veggie Pizza",
      price: 9.99,
      description: "A delicious pizza",
    },
    {
      name: "Meat Lover's Pizza",
      price: 9.99,
      description: "A delicious pizza",
    },
    {
      name: "Hawaiian Style Pizza",
      price: 9.99,
      description: "A delicious pizza",
    },
    {
      name: "Margherita Pizza",
      price: 9.99,
      description: "A delicious pizza",
    }
  ];
  
  const seedPizzas = () => Pizza.bulkCreate(pizzaData, {
    individualHooks: true,
});

module.exports = seedPizzas