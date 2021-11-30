const Transaction = require('../database/models/transactionModel');

module.exports.createTransaction = async (serviceData) => {
  try {
    const newTransaction = new Transaction({
      amount: serviceData.amount,
      description: serviceData.description,
      balance: serviceData.balance,
    });

    let result = await newTransaction.save();

    return result;
  } catch (error) {
    console.error('Error in transactionService.js', error);
    throw new Error(error);
  }
};

module.exports.getCurrentMonthTransactions = async (serviceData) => {
  try {
    // const transactions = await Transaction.find({
    //   id: serviceData.id,
    //   amount: serviceData.amount,
    //   description: serviceData.description,
    //   balance: serviceData.balance,
    //   type: serviceData.type,
    //   category: serviceData.category,
    //   note: serviceData.note,
    // });

    // POSSIBLE ???
    const transactions = await Transaction.find((items) => {
      items;
    });

    if (!transactions) {
      throw new Error('Transaction not found!');
    }

    return transactions.toObject();
  } catch (error) {
    console.error('Error in transactionService.js', error);
    throw new Error(error);
  }
};

module.exports.getSingleTransaction = async serviceData => {
  try {
    const transactionId = await Transaction.findOne({ id: serviceData.id })

    if (!transactionId) {
      throw new Error('Transaction not found!')
    }

    return transactionId.toObject()
  } catch (error) {
    console.error('Error in transactionService.js', error)
    throw new Error(error)
  }
}

module.exports.updateTransactionEditableSettings = async (serviceData) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      {
        category: serviceData.body.category,
        note: serviceData.body.note,
      },
      { new: true }
    );

    if (!transaction) {
      throw new Error('Transaction not found!');
    }

    return transaction.toObject();
  } catch (error) {
    console.error('Error in transactionService.js', error);
    throw new Error(error);
  }
};
