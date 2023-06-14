const newsletterCollection = require('../models/newsletterModel');

module.exports = async function(req, res) {
  try {
    const { email } = req.body;
    const existingUser = await newsletterCollection.findOne({ email: email });
    if (existingUser) {
      res.sendStatus(200);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};