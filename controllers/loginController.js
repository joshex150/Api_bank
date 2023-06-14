const userCollection = require("../models/userModel");
var CryptoJS = require("crypto-js");

module.exports = async (req, res) => {
  try {
    const email = req.body.email; // Change from req.params.email to req.body.email
    const password = req.body.password; // Change from req.params.password to req.body.password
    const user = await userCollection.findOne({ email });
    if (user) {
      // Check if password matches
      const result = user.password === password; // Change from req.body.password to password
      if (result) {
        var data = { user };
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "07052580111"
        ).toString();
        res.send(ciphertext);
      } else {
        res.status(400).send("Password or user mismatch");
      }
    } else {
      res.status(400).send("Password or user mismatch");
    }
  } catch (error) {
    res.status(400).send("Error");
  }
};
