const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/transaction',  tokenValidation.validateToken, transactionController.createTransaction)

module.exports = router
