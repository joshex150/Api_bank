const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
});

const newsletterCollection = new mongoose.model('newslettercollection', newsletterSchema);

module.exports = newsletterCollection;