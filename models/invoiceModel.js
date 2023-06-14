const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  flag: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
  userRef: {
    type: String,
    required: true,
  },
});

const invoiceCollection = mongoose.model("invoiceCollection", invoiceSchema);

module.exports = invoiceCollection;
