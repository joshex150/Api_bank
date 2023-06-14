const invoiceCollection = require('../models/invoiceModel');

module.exports = async function (req, res) {
  try {
    const invoiceData = new invoiceCollection({
      orderId: req.body.orderId,
      totalPrice: req.body.totalPrice,
        flag: req.body.flag,
        status: req.body.status,
      timeStamp: req.body.timeStamp,
      userRef: req.body.userRef,
    });

    const postData = await invoiceData.save();
    res.send(postData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};
