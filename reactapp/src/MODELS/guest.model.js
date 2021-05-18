const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const GuestSchema = new Schema({
  name: String,
  temperature: Number,
  vaccine: String,
  notes: String
});

const GuestTemp = mongoose.model('Guest', GuestSchema);

module.exports = GuestTemp;