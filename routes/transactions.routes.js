const express = require('express');
const transactionController = require('../app/controllers/transaction.controller');

const router = express.Router();

// Create a new transaction
router.post('/', transactionController.createTransaction);

// Read all transactions
router.get('/', transactionController.getAllTransactions);

// Read a single transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/:id', transactionController.updateTransaction);

// Delete a transaction by ID
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
