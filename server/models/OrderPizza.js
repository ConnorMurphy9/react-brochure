const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderPizza extends Model {}

OrderPizza.init(
    {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
          },
          orderId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'order',
              key: 'id'
            },
          },
          pizzaId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'pizza',
              key: 'id'
            },
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "orderpizza",
  }
);

module.exports = OrderPizza;