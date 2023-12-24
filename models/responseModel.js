const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: false,
  },
  movie: {
    type: [],
    required: false,
  },
});

const responseCollection = new mongoose.model(
  "responsecollection",
  responseSchema
);

module.exports = responseCollection;
