const express = require('express');
const app = express();
const port = 3000;
const cors =require('cors')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()
const empdata =require("./models/empinfos.js")

app.use(cors())
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://PriyankaWagadre:9806273869@cluster0.udyxx.mongodb.net/Employee_database?retryWrites=true&w=majority',

{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>{console.log('Connetion sucessful to mongodb atlas')}
)

// const empinfos = require('./empinfos.js')

// app.get('/empinfo',(req,res)=>{
//     empinfos.find().then(
//         (empdata)=>{console.log(empdata);
//         res.send(empdata)}
//     )
// })

users_data=[
    {name:'Priyanka',course:'FSD'},
    {name:'Neha',course:'Python'}
]

app.get('/users',(req,res)=>{
    res.send(users_data)

})

app.get('/empMongoDB',(req,res)=>{
    empdata.find().then(
        (mDBdata)=>{
            res.send(mDBdata);
            res.end()
        })
     } )
     app.post('/addData',jsonparser,(req,res)=>{
         const newemp= new empdata({
             _id: new mongoose.Types.ObjectId,
             emp_name:req.body.ename,
             emp_id:req.body.eid,
             emp_dept:req.body.dept
         })
newemp.save().then(
    (result)=>{console.log(result)}
).catch(
    (err)=>{console.log(err)}
)

     })
// update api
app.put('/updatedata/:id',jsonparser,(req,res)=>{
    empdata.updatedata(
        {_id:req.params.id},
        {$set:{
            emp_name:req.body.ename,
            emp_id:req.body.eid,
            emp_dept:req.body.edept,
        }}
    ).then(
        (info)=>{console.log(info)}
    ).catch(
        (err)=>{console.log(err)}
    )
    
})




app.listen(port , ()=>{console.log('Server is running')})


