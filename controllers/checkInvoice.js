const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  try {
    const {orderID} = req.query;
    console.log(req.query.orderID)
    const Invoice = await invoiceCollection.find({orderId: orderID});
    if (Invoice) {
      res.send(Invoice) // Send transactionData as JSON
    } else {
      console.error("Failed to find Invoice data");
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};