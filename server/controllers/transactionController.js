const transactionService = require('../services/transactionService')

module.exports.createTransaction = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await transactionService.createTransaction(req.body)
    response.status = 200
    response.message = 'Transaction successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in transactionController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

