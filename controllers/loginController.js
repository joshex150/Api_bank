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
        const sender = "joshex150@gmail.com";
        const recipient = email;
        const subject = "Successful Login";
        const text = "You have successfully logged in.";
        // Encrypt
        const data = { user };
        const ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(data),
          "07052580111"
        ).toString();
        sendEmail(sender, recipient, subject, text);
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
// const sender = "joshex150@gmail.com";
// const recipient = email;
// const subject = "Suspicious Activity";
// const text = `Dear ${email}, someone is trying to Log into your account`;
// sendEmail(sender, recipient, subject, text)
//   .then(async () => {})
//   .catch(async (error) => {
//     sendEmail(sender, recipient, subject, text);
//   });
