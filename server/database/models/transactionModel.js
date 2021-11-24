const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    balance: Number,
    amount: Number,
    description: String,
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
