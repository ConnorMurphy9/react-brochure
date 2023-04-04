const { Product } = require('../models');

const productData = [
    {
      product_name: "Chicago Style Pizza"
    },
    {
      product_name: "Veggie Pizza"
    },
    {
      product_name: "Meat Lover's Pizza"
    },
    {
      product_name: "Hawaiian Style Pizza"
    },
    {
      product_name: "Margherita Pizza"
    }
  ];
  
  const seedProducts = () => Product.bulkCreate(productData, {
    individualHooks: true,
});

module.exports = seedProducts