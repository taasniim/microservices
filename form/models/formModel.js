const mongoose=require('mongoose')
const Schema =mongoose.Schema 

//shema pour un champ de formulaire 
const formField=new Schema({
    label:{
        type : String,
        required:true,
    },
    type:{
        type : String,
        required :true,
        enum:['text', 'textarea', 'select','number','email','date','file','tel','input','checkbox','RadioButton'],
    },
    options:['String'],
});

//shema pour un un formulaire 
const formSchema =new Schema({
    title:{ 
        type:String,
        required:true
    }, 
    fields:[formField], 
    publish:{
        type:Boolean,
        default:false,
    }
});


const Form=mongoose.model('form',formSchema); 
const FormFields=mongoose.model('formfields',formField); 
module.exports={
    Form,
    FormFields
}

