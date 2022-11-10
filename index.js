
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")

const {InterviewData,DynamicsJobs} = require("./model.js")

const app = express()
app.use(express.json())
app.use(cors())
try{
  mongoose.connect("mongodb+srv://venkatesh:venkatesh@cluster0.eyze3ag.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Db connected..."))

app.listen(3600,() => console.log("server started..."))
}catch(err){
  console.log(err)
}

//dynamic jobs
  app.post("/dailyjobs",async(req,res) => {
  const {companyName,role,AboutCompany,rolesAndResponsibility,skills,
         qualifications,requirements,contactDetails,location,experience,
         jobDescription,lastDate,category,url,link} =await req.body
    try{
      const newData =await new DynamicsJobs({companyName,role,AboutCompany,rolesAndResponsibility,
                                    skills,qualifications,requirements,contactDetails,location,
                                    experience,jobDescription,lastDate,category,url,link})
      await newData.save()
     res.send("success")
}catch(err){
      console.log(err)
}
})


try{
  app.get("/jobs",async(req,res) => {
  const data = await DynamicsJobs.find()
  return res.json(data)
})
}catch(err){
  console.log(err)
}


try{
  app.get("/jobs/:id",async(req,res) => {
  const data = await DynamicsJobs.findById(req.params.id)
  return res.json(data)
  
})
}catch(err){
  console.log(err)
}




//static data 

  app.post("/InterviewData",async(req,res) => {
  const {subject,question,answer} =await req.body
    console.log("function triggered")
  try{
  const newData1 = await new InterviewData({subject,question,answer})
  await newData1.save()
  res.send("success")

}catch(err){
    console.log(err)
}})


 app.get("/InterviewData",async(req,res) => {
  try{
  const answer = await InterviewData.find()
  res.json(answer)
}catch(err){
    console.log(err)
}})






