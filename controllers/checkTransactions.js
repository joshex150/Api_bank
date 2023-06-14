const invoiceCollection = require('../models/invoiceModel');

module.exports = async function(req, res) {
  try {
    const { email } = req.body;
    const transactionData = await invoiceCollection.findOne({ email: email });
    res.send(transactionData)
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};