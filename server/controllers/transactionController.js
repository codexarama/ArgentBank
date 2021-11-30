const transactionService = require('../services/transactionService')

module.exports.createTransaction = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await transactionService.createTransaction(req.body)
    // 201 FOR CREATION ////////////////////////////////////////////////////////////
    response.status = 201
    response.message = 'Transaction successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in transactionController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.getCurrentMonthTransactions = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getCurrentMonthTransactions(req)
    response.status = 200
    response.message = 'Successfully got transactions current month data'
    response.body = responseFromService
  } catch (error) {
    console.log('Something went wrong in transactionController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.getSingleTransaction = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getSingleTransaction(req)
    response.status = 200
    response.message = 'Successfully got selected transaction data'
    response.body = responseFromService
  } catch (error) {
    console.log('Something went wrong in transactionController.js')
    response.status = 404
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.updateTransactionEditableSettings = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateTransactionEditableSettings(req)
    response.status = 200
    response.message = 'Successfully updated selected transaction data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateTransaction - transactionController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

