const mongoose = require('mongoose')

let empSchema =  new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    emp_name:String,
    emp_id:Number,
    emp_dept:String
})
module.exports = mongoose.model('datas',empSchema)
