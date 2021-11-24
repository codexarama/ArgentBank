const Transaction = require('../database/models/transactionModel')

module.exports.createTransaction = async serviceData => {
  try {
    const newTransaction = new Transaction({
      balance: serviceData.balance,
      description: serviceData.description,
      amount: serviceData.amount
    })

    let result = await newTransaction.save()

    return result
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
