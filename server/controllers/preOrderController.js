const createPreOrder = (req, res) => {
    const { name, email } = req.body;
    // Logic to handle pre-order and interact with the database
    res.status(201).send({ message: 'Pre-order created' });
  };
  
  module.exports = { createPreOrder };
  