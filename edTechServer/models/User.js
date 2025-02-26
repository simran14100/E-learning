const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    accountType:{
        type:String,
        required:true,
        enum:["Admin" , "Student" , "Instructor"],

    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId ,
        required:true,
        ref:"Profile",
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    

    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Course",
        }
    ],
    image:{
        type:String,
        
    },
    courseProgress:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgess",
      }
    ],
   
  // Add timestamps for when the document is created and last modified
},
{ timestamps: true }
)

module.exports = mongoose.model("User" , userSchema);