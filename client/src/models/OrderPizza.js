const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../../server/config/connection');

class OrderPizza extends Model {}

OrderPizza.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
          }
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