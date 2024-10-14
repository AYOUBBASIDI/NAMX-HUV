const express = require('express');
const router = express.Router();
const preOrderController = require('../controllers/preOrderController');

// Define routes for pre-order handling
router.post('/', preOrderController.createPreOrder);

module.exports = router;
