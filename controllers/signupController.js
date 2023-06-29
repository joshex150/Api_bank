const userCollection = require('../models/userModel');
const sendEmail = require("../controllers/mailController");

module.exports = async function (req, res) {
  try {
    const existingUser = await userCollection.findOne({ email: req.body.email });
    if (!existingUser) {
      sendEmail(sender, recipient, subject, text)
          .then(async () => {
            const userData = new userCollection({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              phone: req.body.phone,
              password: req.body.password,
              email: req.body.email,
              state: req.body.state,
              country: req.body.country,
              zip: req.body.zip,
              amount: req.body.amount,
              createdAt: req.body.createdAt,
              stats: req.body.stats,
              limit: req.body.limit,
            });
            const postData = await userData.save();
            res.send(postData);
          })
     
    }else{
      res.status(400).send('Email already exists'); 
    }
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};