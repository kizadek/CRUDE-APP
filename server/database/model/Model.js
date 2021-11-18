const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let studentSchema = new Schema({
    first_name:{
      type:String,
      required:true
    },
    last_name:{
        type:String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    salutation:{
        type:String,
        required:true
    },
    blood_group:{
        type:String,
        required: true
    },
    nationality:{
        type:String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    course:{
        type:String,
        required: true
    },
    email:{
      type: String,
      required: true
    },
    password:{
        type: String,
        required: true
    },
    student_id:{
        type: String,
        unique:true,
    },
    status:{
       type:String
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
})





module.exports = mongoose.model('Student',studentSchema);