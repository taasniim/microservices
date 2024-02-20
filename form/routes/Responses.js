
const express=require('express');
const router=express.Router(); 
const Response=require('../models/responseModel'); 
const {SaveResponse,getAllResponses,countResponses}=require('../controllers/ResponsesController')

router.post('/',SaveResponse); 
router.get('/:formId',getAllResponses);
router.get('/count/:formId',countResponses);





module.exports=router
