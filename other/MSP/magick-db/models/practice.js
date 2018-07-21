const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
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

const Practice = mongoose.model('Practice', practiceSchema);

Practice.addPractice = (practice, callback) => {
  Practice.create(practice, callback);
};

module.exports.Practice = Practice;
