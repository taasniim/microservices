require('dotenv').config();
const cors = require('cors');
const express=require('express') ;
const bodyParser = require('body-parser'); 
const formsRoutes=require('./routes/forms') ;
const ResponsesRoutes=require('./routes/Responses') 
const mongoose=require('mongoose')
//express app
const app=express()
//middleware 
app.use((express.json()))
app.use((req,res,next)=>{
    console.log(req.path,res.method)
    next()
})  
app.use(cors());
//routes
app.use('/api/forms',formsRoutes) 
app.use('/api/Responses',ResponsesRoutes) 
//connect with the mongo db 
mongoose.connect(process.env.MONGO_UI)
//what we do after connect to the databes ? we listen to the requests 
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('connecte to  db listennig on port 4000',process.env.PORT)
        }) 
    })  
    //what we do if the connection to the database failed 
    .catch((error)=>{
        console.log(error)
    })


process.env