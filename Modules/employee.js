const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = Schema(
  {
    name: {
        type: String,
        // required: true
      }, 
      phone: {
        type: String,
        // required: false
      },
      email: {
        type: String,
        // required: true,
        // unique: true
      },
      
      yearsofexperience: {
        type: String,
       
      },
      images: {
        type: String
      },
    });

module.exports = mongoose.model("employee", employee, "employee" );