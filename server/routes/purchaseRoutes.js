const express = require('express');
const router = express.Router();
const { getPurchaseBySKU } = require('../controllers/purchaseController');

router.get('/purchase/:sku', getPurchaseBySKU);

module.exports = router;
