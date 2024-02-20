const Form=require('../models/formModel').Form;
const mongoose=require('mongoose')

//get all forms
const getAllForms=async(req,res)=>{
    const forms=await Form.find({}).sort({createdAt:-1})
    res.status(200).json(forms)
}

// get one form 
const getoneforms=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})
    }
    const form=await Form.findById(id)
    if (!form)
    {
        return res.status(404).json({error:'No  such form'})
    } 
    res.status(200).json(form)
}


//create one form 
const createoneForm = async (req, res) => {
    const { title, fields } = req.body;

    if (!title || !fields || fields.length === 0) {
        return res.status(400).json({ error: 'Title and at least one field are required.' });
    }

    try {
        const form = await Form.create({ title, fields });
        res.status(200).json(form); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
   
};


//delete one form
const deleteoneForm=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})  
    } 
    const form=await Form.findOneAndDelete({_id:id}) 
    if (!form)
    {
        return res.status(404).json({error:'No such form'})
    } 
    res.status(200).json(form)
}

//update one form 
const updateoneForm=async(req,res)=>{
    const {id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})  
    }  
    const form=await Form.findByIdAndUpdate({_id:id},{
        ...req.body
    }) 
    if (!form)
    {
        return res.status(404).json({error:'No such form'})
    } 
    res.status(200).json(form)
}
const publishForm = async (req, res) => { 

    const { id } = req.params; 
    //verifie si l'id est valide  
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such form'})  
    }   
    try {
        // Vérifiez si le formulaire existe
        const form = await Form.findById(id);
        if (!form) {
            return res.status(404).json({ error: 'No such form' });
        }

        // Mettez à jour le champ "publish"
        form.publish = true;
       await form.save()
        
        res.status(200).json({ message: 'Form published successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports={
    createoneForm, 
    getAllForms,
    getoneforms,
    deleteoneForm, 
    updateoneForm,
    publishForm
}