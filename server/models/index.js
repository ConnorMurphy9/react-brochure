const User = require('./User');
const Order = require('./Order');
const Pizza = require('./Pizza');
const OrderPizza = require('./OrderPizza')

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Pizza, { through: OrderPizza });
Pizza.belongsToMany(Order, { through: OrderPizza });

OrderPizza.belongsTo(Order);
Order.hasMany(OrderPizza);

OrderPizza.belongsTo(Pizza);
Pizza.hasMany(OrderPizza);


module.exports = { User, Order, Pizza, OrderPizza};
