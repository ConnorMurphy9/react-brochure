// const User = require('./User');
// const Order = require('./Order');
// const Product = require('./Product');
const Pizza = require('./Pizza');
// User.belongsToMany(Product, {
//     // Define the third table needed to store the foreign keys
//     through: {
//       model: Order,
//       unique: false
//     },
//     // Define an alias for when data is retrieved
//     as: 'user_orders'
//   });

//   Product.belongsToMany(User, {
//     // Define the third table needed to store the foreign keys
//     through: {
//       model: Order,
//       unique: false
//     },
//     // Define an alias for when data is retrieved
//     as: 'product_users'
//   });

// module.exports = { User, Order, Product};
module.exports = {Pizza}