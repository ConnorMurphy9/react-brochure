const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Product extends Model {}

Product.init(
        {





        },

        {  
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: "message",
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