const ResponseModel=require('../models/responseModel').ResponseModel;
const mongoose=require('mongoose')
//create response 
const SaveResponse=async(req,res)=>{
const {form,fieldResponses}=req.body; 
if(!form||!fieldResponses||fieldResponses.lengh==0){
    return res.status(400).json({error:"form and fieledResponses are required"})
} 
//add the responses to the collection in the database
try {
    const Response=ResponseModel.create({form,fieldResponses});
} 
catch(error){
    return res.status(400).json({error:error.message});
} 
return res.json({mssg:"Response created"})
}


//get responses 
const getAllResponses =async(req,res)=>{ 
    const {formId}=req.params;
    const responses=await ResponseModel.find({form: formId});
    res.status(200).json(responses)
} 

//number of response 
const countResponses =async(req,res)=>{ 
    const {formId}=req.params;
    const responses=await ResponseModel.countDocuments({form: formId});
    res.status(200).json({responses})
}


module.exports={
    SaveResponse, 
    getAllResponses, 
  countResponses
    
}