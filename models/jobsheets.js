const mongoose = require('mongoose');

const JobsheetSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  fault: {
    type: String,
    required: true,
  },
  data_backed_up: [{
    type: String,
    default: 'yes'
  }],

  equipment: {
    type: String,
  },
  serial_no: {
    type: String,
  },
  accessories: {
    type: String,
  },
  special_notes: {
    type: String,
  },
  service_option: [{
    type: String,
  }],
  service_option_other: {
    type: String,
  },
  sales_reference:{
    type:String
  },
  diagonosis: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Jobsheet = mongoose.model('jobsheet', JobsheetSchema);

module.exports = Jobsheet;

