const mongoose = require('mongoose');

const dreamSchema = new mongoose.Schema({
  feelingImageURL: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
  },
  textDescription: {
    type: String,
    trim: true,
  },
  audioDescription: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Dream = mongoose.model('Dream', dreamSchema);

Dream.addDream = (dream, callback) => {
  Dream.create(dream, callback);
};

module.exports.Dream = Dream;
