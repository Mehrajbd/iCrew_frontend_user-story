const Purchase = require('../models/Purchase');

const getPurchaseBySKU = async (req, res) => {
  try {
    const item = await Purchase.findOne({ sku: req.params.sku });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getPurchaseBySKU,
};
