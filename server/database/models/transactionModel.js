const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    description: String,
    amount: Number,
    balance: Number,
    type: String,
    category: String,
    note: String
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)
