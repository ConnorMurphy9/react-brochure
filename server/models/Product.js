const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Product extends Model {}

Product.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
              },
              product_name: {
                type: DataTypes.STRING,
                allowNull: false
              }




        },

        {  
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: "product",
        }
);

// const { Schema } = mongoose;

// const ProductSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     image: {
//         type: String
//     },
//     description: {
//         type: String,
//     }

// });

// const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;