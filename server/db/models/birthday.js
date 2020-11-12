const mongoose = require("mongoose");

const birthdaySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  cohort_number: {
    type: String,
    required: true,
    trim: true,
  },
  month: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trime: true,
  },
}, {
  timestamps: true
});
const Birthday = mongoose.model('Birthday', birthdaySchema);
module.exports = Birthday;