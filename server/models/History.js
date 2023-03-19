const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class History extends Model {}

History.init(
          {
              id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                },
              ordered_product: {
                type: DataTypes.TEXT,
                allowNull: false,
                },



          },
          {
            sequelize,
            timestamps: true,
            freezeTableName: true,
            underscored: true,
            modelName: "message",
          }
);
// const historySchema = new Schema({
//   purchaseDate: {
//     type: Date,
//     default: Date.now
//   },
//   Orders: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Order'
//     }
//   ]
// });

// const History = mongoose.model('History', historySchema);

module.exports = History;
