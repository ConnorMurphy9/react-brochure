const seedUsers = require('./userSeeds');
const seedProducts = require('./productSeeds');
const seedOrders = require('./orderSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedOrders();
  console.log('\n----- Orders SEEDED -----\n');
};

// seedAll();

module.exports = seedAll