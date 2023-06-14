const newsletterCollection = require('../models/newsletterModel');

module.exports = async function (req, res) {
  try {
    const existingUser = await newsletterCollection.findOne({ email: req.body.email });
    if (!existingUser) {
    const newsletterData = new newsletterCollection({
      email: req.body.email,
    });
    const postData = await newsletterData.save();
    res.send(postData);
  }else{
    res.status(400).send('Email already Subscribed'); 
  }
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

