const express = require('express');
const connectDB = require('./config/db');
const purchaseRoutes = require('./routes/purchaseRoutes');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', purchaseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
