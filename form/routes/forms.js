//endpoints or routes 
const express=require('express') 
const router =express.Router() 
const Form=require('../models/formModel')
const {createoneForm,getAllForms,getoneforms,deleteoneForm, updateoneForm,publishForm}=require('../controllers/formController')
//get all the form
router.get('/',getAllForms)  
//get one form 
router.get('/:id',getoneforms) 
//create
router.post('/',createoneForm) 
//delete
router.delete('/:id',deleteoneForm)  

//update 
router.patch('/:id',updateoneForm)  
//publish 
router.patch('/publish/:id',publishForm) 

module.exports=router 