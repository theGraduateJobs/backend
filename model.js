const mongoose = require("mongoose")
const InterviewData = mongoose.Schema({

    subject:{type:String,required:true},
    question :{type:String,required:true},
    answer : {type:String,required:true}

});
const DynamicsJobs = mongoose.Schema({
  companyName : {type:String,required:true},
  role:{type:String,required:true},
  AboutCompany:{type:String},
  rolesAndResponsibility:[],
  skills : {type:String},
  qualifications:{type:String},
  requirements:[],
  contactDetails:{type:String},
  location:{type:String},
  experience:{type:String},
  jobDescription : {type:String},
  lastDate:{type:String},
  url:{type:String,required:true},
  category: {type:String,required:true},
  link:{type:String,required:true}
})

exports.InterviewData =mongoose.model("InterviewData",InterviewData)
exports.DynamicsJobs = mongoose.model("description",DynamicsJobs)

