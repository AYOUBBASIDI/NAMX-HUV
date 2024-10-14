const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const preOrderRoutes = require('./routes/preOrderRoutes');
app.use('/api/pre-orders', preOrderRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
