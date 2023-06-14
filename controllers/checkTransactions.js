const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  try {
    const email = req.body.email;
    const transactionData = await invoiceCollection.find({userRef:email});
    res.send(transactionData)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};