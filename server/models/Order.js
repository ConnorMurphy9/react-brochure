const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
          {
              id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                },
              user_id: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'user',
                  key: 'id',
                  unique: 'false'
                }
                },
              product_id: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'product',
                  key: 'id',
                  unique: 'false'
                }
              },
          },
          {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: "order",
          }
);

module.exports = Order;