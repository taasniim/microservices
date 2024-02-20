const mongoose=require('mongoose') ; 
const Form=require('./formModel').Form ;
const FormFields=require('./formModel').FormFields;
const Schema=mongoose.Schema ;

const ResponseSchema=new Schema({
    form:{
        type:mongoose.Schema.Types.ObjectID,  //form is a mongodb object
        ref:'Form', 
        required:true,
    }, 
    fieldResponses:[
        {   fieldId:{
            type : mongoose.Schema.Types.ObjectId,
            ref:'FormFields',
            required:true }, 
            value :String,
        }
    ]
})
const ResponseModel=mongoose.model('Responses',ResponseSchema);
module.exports={
    ResponseModel,
}
