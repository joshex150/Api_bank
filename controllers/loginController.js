const userCollection = require("../models/userModel");
const CryptoJS = require("crypto-js");
const sendEmail = require("../controllers/mailController");

module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userCollection.findOne({ email });

    if (user) {
      // Check if password matches
      const result = user.password === password;

      if (result) {
        // Encrypt
        const data = { user };
        const ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "07052580111"
        ).toString();
        const sender = "joshex150@gmail.com";
        const recipient = email;
        const subject = "Successful Login";
        const text = "You have successfully logged in.";
        await sendEmail(sender, recipient, subject, text);
        res.send(ciphertext);
      } else {
        res.status(400).send("Password or user mismatch");
      }
    } else {
      res.status(400).send("Password or user mismatch");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};