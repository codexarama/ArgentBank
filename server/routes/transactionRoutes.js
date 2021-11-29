const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const tokenValidation = require('../middleware/tokenValidation');

router.post(
  '/create',
  tokenValidation.validateToken,
  transactionController.createTransaction
);

router.get(
  '/transaction:current',
  tokenValidation.validateToken,
  transactionController.getCurrentMonthTransactions
);

router.get(
  '/transaction:id',
  tokenValidation.validateToken,
  transactionController.getTransactionById
);

router.put(
  '/transaction:id',
  tokenValidation.validateToken,
  transactionController.updateTransactionEditableSettings
);

module.exports = router;
