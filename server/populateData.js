const mongoose = require('mongoose');
const Purchase = require('./models/Purchase');

mongoose.connect('mongodb://localhost:27017/purchaseDB', { useNewUrlParser: true, useUnifiedTopology: true });

const items = [
  { sku: "SKU001", name: "Item A", price: 100 },
  { sku: "SKU002", name: "Item B", price: 200 },
  { sku: "SKU003", name: "Item C", price: 300 }
];

Purchase.insertMany(items)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
