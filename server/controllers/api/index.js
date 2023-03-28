const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');

User.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Order,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_orders'
});

Product.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Order,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'product_users'
});

module.exports = { User, Product, Order };
