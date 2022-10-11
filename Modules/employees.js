const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employees = Schema(
  {
    jobname: {
        type: String,
        // required: true,
      }, 
      jobdec: {
        type: String,
        // required: true,
      },
      location: {
        type: String,
        // required: false,
      },
        images: {
          type: String
          // required: false,
      }

    });


module.exports = mongoose.model("employees", employees, "employees" );