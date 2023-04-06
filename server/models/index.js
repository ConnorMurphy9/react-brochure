const User = require('./User');
const Order = require('./Product');
const Product = require('./Product');

User.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Order,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_orders'
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

module.exports = { User, Order, Product};
