const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  try {
    const { email } = req.body;
    const transactionData = await invoiceCollection.findOne(email);

    if (transactionData) {
      res.json(transactionData);
    } else {
      console.error("Failed to find transaction data");
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
