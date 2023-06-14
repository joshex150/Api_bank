const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  try {
    const email = req.body.email;
    const transactionData = await invoiceCollection.find({userRef:email});
    if (transactionData) {
      res.send(transactionData) // Send transactionData as JSON
    } else {
      console.error("Failed to find transaction data");
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};