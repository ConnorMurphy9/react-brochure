const mongoose = require('mongoose');

const { Schema } = mongoose;

const historySchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  Orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const History = mongoose.model('History', historySchema);

module.exports = History;
