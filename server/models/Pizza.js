const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pizza extends Model {}

Pizza.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },   
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }      
    },

    {  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "pizza",
    }
);

module.exports = Pizza;
