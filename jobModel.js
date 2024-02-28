const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    jobType : {
        type : String,
        required : true
    },
    contactNumber : {
        type : Number,
        required  : true,
        min : 1111111111,
        max : 9999999999
    },
  email : {
    type : String,
    required : true
  },
  address : {
    type : String,
    required : true
  }  
})

module.exports = mongoose.model("organization" , postSchema);