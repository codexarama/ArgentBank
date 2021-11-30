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
  '/' + '',
  tokenValidation.validateToken,
  transactionController.getCurrentMonthTransactions
);

router.get(
  '/:id',
  tokenValidation.validateToken,
  transactionController.getSingleTransaction
);

router.put(
  '/:id',
  tokenValidation.validateToken,
  transactionController.updateTransactionEditableSettings
);

module.exports = router;
