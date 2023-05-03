const seedUsers = require('./userSeeds');
const seedOrders = require('./orderSeeds');
const seedPizzas = require("./pizzasSeeds");
const seedOrderPizzas = require("./orderpizzaSeeds");
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedPizzas();
  console.log('\n----- PIZZAS SEEDED -----\n');
   await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');
  await seedOrderPizzas();
  console.log('\n----- OrderPizza DATA SEEDED -----\n');
};



module.exports = seedAll