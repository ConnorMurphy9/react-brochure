const { User } = require('../models');
    
const userData = [
    {
      username: 'User 1',
      email: 'user1@example.com',
      password: "user1password",
      firebaseUid: 'firebaseUid1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'User 2',
      email: 'user2@example.com',
      password: "user2password",
      firebaseUid: 'firebaseUid2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'User 3',
      email: 'user3@example.com',
      password: "user3password",
      firebaseUid: 'firebaseUid3',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUsers
  