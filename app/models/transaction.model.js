const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    date: { type: String, required: true },
    activity: { type: String, required: true },
    category: { type: String, required: true },
    account: { type: String, required: true },
    value: { type: Number, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
