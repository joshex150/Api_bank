const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    min: 9,
    unique: true,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  zip: {
    type: Number,
    required: false,
  },
  amount: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  stats: {
    type: Object,
    required: false,
  },
  messagesCount: {
    type: Number,
    default: 0,
  },
  limit: {
    type: Number,
    default: 400000,
  },
});

const userCollection = new mongoose.model("usercollection", userSchema);

module.exports = userCollection;
