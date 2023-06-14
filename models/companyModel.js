const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    min: 9,
    uqique: true,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },  
  state: {
    type: String,
    required: false
  },
  zip: {
    type: Number,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    required: false
  },
  password: {
    type: String,
    min: 6,
    required: true
  }
});

const companyCollection = new mongoose.model('companycollection', companySchema);

module.exports = companyCollection;