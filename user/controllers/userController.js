const User=require('../models/userModel').Form;
const mongoose=require('mongoose')

//get all users
const getAllUsers=async(req,res)=>{
    const users=await User.find({}).sort({createdAt:-1})
    res.status(200).json(users)
}

// get one user
const getoneUser=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }
    const user =await User.findById(id)
    if (!form)
    {
        return res.status(404).json({error:'No  such user'})
    } 
    res.status(200).json(form)
}


//create one user
const createoneUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'mame, email and password are required.' });
    }

    try {
        const user = await User.create({ name, email,password });
        res.status(200).json(user); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
   
};


//delete one user
const deleteoneUser=async(req,res)=>{
    const{id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})  
    } 
    const user=await User.findOneAndDelete({_id:id}) 
    if (!user)
    {
        return res.status(404).json({error:'No such user'})
    } 
    res.status(200).json(user)
}

//update one user
const updateoneUser=async(req,res)=>{
    const {id}=req.params 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})  
    }  
    const user=await User.findByIdAndUpdate({_id:id},{
        ...req.body
    }) 
    if (!user)
    {
        return res.status(404).json({error:'No such user'})
    } 
    res.status(200).json(user)
}


module.exports={
    createoneUser, 
    getAllUsers,
    getoneUser,
    createoneUser,
    deleteoneUser, 
    updateoneUser,
    }