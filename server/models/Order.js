const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
          {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: false
            },
            orderDate: {
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW
            },
            total: {
              type: DataTypes.DECIMAL(10, 2),
              allowNull: false
            },
            status: {
              type: DataTypes.ENUM('pending', 'paid', 'shipped'),
              defaultValue: 'pending'
            },
            user_id: {
              type: DataTypes.INTEGER,
              references: {
                model: 'user',
                key: 'id'
              },
            }
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






