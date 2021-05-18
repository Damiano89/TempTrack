const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  name: String,
  temperature: Number,
  vaccine: String,
  notes: String
});

const EmployeeTemp = mongoose.model('Employee', EmployeeSchema);

module.exports = EmployeeTemp;