const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  console.log(req.body);
  try {
    const { email } = req.body.email;
    const transactionData = await invoiceCollection.find(email);
    res.send(transactionData)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};