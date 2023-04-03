const sequelize = require('../config/connection');
const { User, Product, Order } = require('../models');

const userSeedData = require('./userSeeds.json');
const productSeedData = require('./productSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  const users = await User.bulkCreate(userSeedData);

  const products = await Product.bulkCreate(productSeedData);

  // Create orders at random
  for (let i = 0; i < 5; i++) {
    // Get a random user's `id`
    const { id: randomUserId } = users[
      Math.floor(Math.random() * users.length)
    ];

    // Get a random product's `id`
    const { id: randomProductId } = products[
      Math.floor(Math.random() * products.length)
    ];

    // Create a new order with random `user_amount` values, but with ids selected above
    await Order.create({
      user_amount: Math.floor(Math.random() * 10) + 1,
      user_id: randomUserId,
      product_id: randomProductId
    }).catch((err) => {
      // If there's an error, such as the same random pairing of `user.id` and `product.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
