const userCollection = require("../models/userModel");
const CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    const newbalance = req.body.totalPrice;
    const user = await userCollection.findOne({ email });

    if (user) {
      // Check if password matches
      const result = user.email === email;

      if (result) {
        // Update the balance field
        user.amount = user.amount + newbalance; // Change req.params.balance to req.body.balance
        const postdata = await user.save();

        // Encrypt user data
        res.send(postdata);
      } else {
        res.status(400).send("user mismatch");
      }
    } else {
      res.status(400).send("user mismatch");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
};
