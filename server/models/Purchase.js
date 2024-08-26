const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  sku: String,
  name: String,
  price: Number,
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
